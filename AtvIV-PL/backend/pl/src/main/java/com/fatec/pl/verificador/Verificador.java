package com.fatec.pl.verificador;

/**
 * Interface para verificação de objetos de tipo genérico.
 *
 * @param <T> o tipo do objeto a ser verificado
 */
public interface Verificador<T> {
    
    /**
     * Verifica se o objeto atende a uma determinada condição.
     *
     * @param objeto o objeto a ser verificado
     * @return true se o objeto atende à condição, false caso contrário
     */
    boolean verificar(T objeto);
}