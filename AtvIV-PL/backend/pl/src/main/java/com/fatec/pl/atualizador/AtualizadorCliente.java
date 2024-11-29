package com.fatec.pl.atualizador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fatec.pl.modelo.Cliente;
import com.fatec.pl.modelo.Telefone;
import com.fatec.pl.verificador.VerificadorEnderecoNulo;
import com.fatec.pl.verificador.VerificadorStringNula;
import com.fatec.pl.verificador.VerificadorTelefoneNulo;

@Component
public class AtualizadorCliente implements Atualizador<Cliente> {
    
    @Autowired
    private VerificadorStringNula verificadorString;
    
    @Autowired
    private VerificadorEnderecoNulo verificadorEndereco;
    
    @Autowired
    private AtualizadorEndereco atualizadorEndereco;
    
    @Autowired
    private VerificadorTelefoneNulo verificadorTelefone;

    @Override
    public void atualizar(Cliente alvo, Cliente atualizacao) {
        if (alvo == null || atualizacao == null) {
            throw new IllegalArgumentException("Cliente alvo e atualização não podem ser nulos.");
        }

        // Atualiza cada campo conforme a necessidade
        if (!verificadorString.verificar(atualizacao.getNome())) {
            alvo.setNome(atualizacao.getNome());
        }

        if (!verificadorString.verificar(atualizacao.getEmail())) {
            alvo.setEmail(atualizacao.getEmail());
        }

        if (!verificadorString.verificar(atualizacao.getNomeSocial())) {
            alvo.setNomeSocial(atualizacao.getNomeSocial());
        }

        if (!verificadorEndereco.verificar(atualizacao.getEndereco())) {
            atualizarEndereco(alvo, atualizacao);
        }

        if (atualizacao.getTelefones() != null && !atualizacao.getTelefones().isEmpty()) {
            atualizarTelefones(alvo, atualizacao);
        }
    }

    private void atualizarEndereco(Cliente alvo, Cliente atualizacao) {
        if (alvo.getEndereco() != null) {
            atualizadorEndereco.atualizar(alvo.getEndereco(), atualizacao.getEndereco());
        } else {
            alvo.setEndereco(atualizacao.getEndereco());
        }
    }

    private void atualizarTelefones(Cliente alvo, Cliente atualizacao) {
        // Remove telefones não presentes na atualização
        alvo.getTelefones().removeIf(t -> atualizacao.getTelefones().stream()
            .noneMatch(a -> a.getDdd().equals(t.getDdd()) && a.getNumero().equals(t.getNumero())));

        // Adiciona novos telefones
        for (Telefone telefone : atualizacao.getTelefones()) {
            boolean telefoneExiste = alvo.getTelefones().stream()
                .anyMatch(t -> t.getDdd().equals(telefone.getDdd()) && t.getNumero().equals(telefone.getNumero()));
            
            if (!telefoneExiste) {
                Telefone novoTelefone = new Telefone();
                novoTelefone.setDdd(telefone.getDdd());
                novoTelefone.setNumero(telefone.getNumero());
                alvo.getTelefones().add(novoTelefone);
            }
        }
    }
}