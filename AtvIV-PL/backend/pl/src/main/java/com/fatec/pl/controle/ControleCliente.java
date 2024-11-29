package com.fatec.pl.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.annotation.Validated;

import com.fatec.pl.modelo.Cliente;
import com.fatec.pl.repositorio.RepositorioCliente;

import java.util.List;

@RestController
@RequestMapping("/cliente")
@Validated
@CrossOrigin(origins = "http://localhost:3000") 
public class ControleCliente {

    @Autowired
    private RepositorioCliente repositorio;

    @PostMapping("/adicionar")
    public ResponseEntity<Cliente> adicionarCliente(@RequestBody @Valid Cliente cliente) {
        if (cliente == null) {
            return ResponseEntity.badRequest().build();
        }
        Cliente novoCliente = repositorio.save(cliente);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoCliente);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> obterCliente(@PathVariable Long id) {
        return repositorio.findById(id)
                .map(cliente -> ResponseEntity.ok(cliente))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Cliente>> listarClientes() {
        List<Cliente> clientes = repositorio.findAll();
        return ResponseEntity.ok(clientes);
    }

    @PutMapping("/atualizar")
public ResponseEntity<?> atualizarCliente(@PathVariable Long id, @RequestBody @Valid Cliente clienteAtualizado) {
    if (clienteAtualizado == null) {
        return ResponseEntity.badRequest().body("Dados do cliente não fornecidos.");
    }

    return repositorio.findById(id).map(clienteExistente -> {
        // Usando AtualizadorCliente
        atualizadorCliente.atualizar(clienteExistente, clienteAtualizado);

        Cliente clienteSalvo = repositorio.save(clienteExistente);
        return ResponseEntity.ok(clienteSalvo);
    }).orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado."));
}


    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<Void> deletarCliente(@PathVariable Long id) {
        if (repositorio.existsById(id)) {
            repositorio.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
