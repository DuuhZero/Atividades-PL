package com.fatec.pl.atualizador;

/**
 * Interface para realizar atualizações em objetos do tipo T.
 *
 * @param <T> o tipo de objeto a ser atualizado
 */
public interface Atualizador<T> {

    /**
     * Atualiza o objeto alvo com os dados do objeto de atualização.
     *
     * @param alvo        o objeto a ser atualizado
     * @param atualizacao o objeto contendo os novos dados
     * @throws IllegalArgumentException se o objeto de atualização não é válido, 
     *                                   ou se o alvo é nulo
     */
    void atualizar(T alvo, T atualizacao) throws IllegalArgumentException;
}