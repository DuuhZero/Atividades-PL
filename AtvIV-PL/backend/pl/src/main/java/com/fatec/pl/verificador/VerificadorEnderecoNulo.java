package com.fatec.pl.verificador;

import com.fatec.pl.modelo.Endereco;

/**
 * Classe responsável por verificar se um Endereço é nulo ou vazio.
 */
public class VerificadorEnderecoNulo implements Verificador<Endereco> {

    @Override
    public boolean verificar(Endereco endereco) {
        if (endereco == null) {
            return true; // Endereço é nulo
        }
        
        // Verifica se tanto a rua quanto o número são nulos
        return endereco.getRua() == null && endereco.getNumero() == null;
    }
}
