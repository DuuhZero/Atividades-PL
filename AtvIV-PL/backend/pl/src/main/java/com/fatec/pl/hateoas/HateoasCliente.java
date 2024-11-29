package com.fatec.pl.hateoas;

import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import com.fatec.pl.controle.ControleCliente;
import com.fatec.pl.modelo.Cliente;

/**
 * Classe responsável por adicionar links HATEOAS a objetos do tipo Cliente.
 */
@Component
public class HateoasCliente implements Hateoas<Cliente> {

    @Override
    public void adicionarLink(List<Cliente> lista) {
        if (lista != null && !lista.isEmpty()) {
            for (Cliente cliente : lista) {
                long id = cliente.getId();
                Link linkProprio = WebMvcLinkBuilder
                        .linkTo(WebMvcLinkBuilder.methodOn(ControleCliente.class).obterCliente(id))
                        .withSelfRel();
                
                // Adiciona o link apenas se ele ainda não estiver presente
                if (!cliente.getLinks().contains(linkProprio)) {
                    cliente.add(linkProprio);
                }
            }
        }
    }

    @Override
    public void adicionarLink(Cliente objeto) {
        if (objeto != null) {
            Link linkClientes = WebMvcLinkBuilder
                    .linkTo(WebMvcLinkBuilder.methodOn(ControleCliente.class).listarClientes())
                    .withRel("clientes");
            
            // Adiciona o link apenas se ele ainda não estiver presente
            if (!objeto.getLinks().contains(linkClientes)) {
                objeto.add(linkClientes);
            }
        }
    }
}