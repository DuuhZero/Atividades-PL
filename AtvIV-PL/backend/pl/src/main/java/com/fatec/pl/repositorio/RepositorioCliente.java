package com.fatec.pl.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.fatec.pl.modelo.Cliente;

@Repository
public interface RepositorioCliente extends JpaRepository<Cliente, Long> {

    /**
     * Encontra um cliente pelo nome.
     *
     * @param nome O nome do cliente.
     * @return O cliente encontrado ou null se não existir.
     */
    Cliente findByNome(String nome);

    /**
     * Encontra um cliente pelo e-mail.
     *
     * @param email O e-mail do cliente.
     * @return O cliente encontrado ou null se não existir.
     */
    Cliente findByEmail(String email);
    
    /**
     * Encontra um cliente pelo ID e carrega telefones relacionados.
     *
     * @param id O ID do cliente.
     * @return O cliente encontrado.
     */
    @Query("SELECT c FROM Cliente c JOIN FETCH c.telefones WHERE c.id = :id")
    Cliente findByIdWithTelefones(@Param("id") Long id);
}
