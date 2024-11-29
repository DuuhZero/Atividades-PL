package com.fatec.pl.atualizador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fatec.pl.modelo.Endereco;
import com.fatec.pl.verificador.VerificadorStringNula;

/**
 * Classe responsável por atualizar informações de um Endereço.
 */
@Component
public class AtualizadorEndereco implements Atualizador<Endereco> {
    
    @Autowired
    private VerificadorStringNula verificadorString;

    @Override
    public void atualizar(Endereco alvo, Endereco atualizacao) {
        if (alvo == null || atualizacao == null) {
            throw new IllegalArgumentException("Endereço alvo e atualizacao não podem ser nulos");
        }
        
        atualizarEstado(alvo, atualizacao);
        atualizarCidade(alvo, atualizacao);
        atualizarBairro(alvo, atualizacao);
        atualizarRua(alvo, atualizacao);
        atualizarNumero(alvo, atualizacao);
        atualizarCodigoPostal(alvo, atualizacao);
        atualizarInformacoesAdicionais(alvo, atualizacao);
    }

    private void atualizarEstado(Endereco alvo, Endereco atualizacao) {
        if (!verificadorString.verificar(atualizacao.getEstado())) {
            alvo.setEstado(atualizacao.getEstado());
        }
    }

    private void atualizarCidade(Endereco alvo, Endereco atualizacao) {
        if (!verificadorString.verificar(atualizacao.getCidade())) {
            alvo.setCidade(atualizacao.getCidade());
        }
    }

    private void atualizarBairro(Endereco alvo, Endereco atualizacao) {
        if (!verificadorString.verificar(atualizacao.getBairro())) {
            alvo.setBairro(atualizacao.getBairro());
        }
    }

    private void atualizarRua(Endereco alvo, Endereco atualizacao) {
        if (!verificadorString.verificar(atualizacao.getRua())) {
            alvo.setRua(atualizacao.getRua());
        }
    }

    private void atualizarNumero(Endereco alvo, Endereco atualizacao) {
        if (!verificadorString.verificar(atualizacao.getNumero())) {
            alvo.setNumero(atualizacao.getNumero());
        }
    }

    private void atualizarCodigoPostal(Endereco alvo, Endereco atualizacao) {
        if (!verificadorString.verificar(atualizacao.getCodigoPostal())) {
            alvo.setCodigoPostal(atualizacao.getCodigoPostal());
        }
    }

    private void atualizarInformacoesAdicionais(Endereco alvo, Endereco atualizacao) {
        if (!verificadorString.verificar(atualizacao.getInformacoesAdicionais())) {
            alvo.setInformacoesAdicionais(atualizacao.getInformacoesAdicionais());
        }
    }
}