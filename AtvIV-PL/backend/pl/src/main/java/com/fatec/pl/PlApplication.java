package com.fatec.pl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fatec.pl.modelo.Cliente;
import com.fatec.pl.modelo.Endereco;
import com.fatec.pl.modelo.Telefone;
import com.fatec.pl.repositorio.RepositorioCliente;

@SpringBootApplication
public class PlApplication implements CommandLineRunner {

    @Autowired
    private RepositorioCliente repositorio;

    public static void main(String[] args) {
        SpringApplication.run(PlApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        criarClientes();
    }

    private void criarClientes() {
        Cliente cliente = new Cliente();
        cliente.setNome("Pedro Alcântara de Bragança e Bourbon");
        cliente.setNomeSocial("Dom Pedro");

        Endereco endereco = new Endereco();
        endereco.setCidade("Rio de Janeiro");
        endereco.setEstado("Rio de Janeiro");
        endereco.setBairro("Centro");
        endereco.setRua("Praça Quinze de Novembro");
        endereco.setNumero("48");
        endereco.setCodigoPostal("20010-010");
        endereco.setInformacoesAdicionais("O Paço Imperial é um edifício histórico localizado na atual Praça XV de Novembro, no centro da cidade do Rio de Janeiro, Brasil.");

        cliente.setEndereco(endereco);
        Telefone telefone = new Telefone();
        telefone.setDdd("21");
        telefone.setNumero("22152622");
        cliente.setTelefones(List.of(telefone));
        repositorio.save(cliente);
    }
}