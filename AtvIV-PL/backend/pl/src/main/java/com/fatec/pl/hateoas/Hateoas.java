package com.fatec.pl.hateoas;

import java.io.Serializable;

/**
 * Interface que representa uma entidade identificável.
 * Todas as entidades que implementam esta interface devem fornecer um identificador único.
 */
public interface Identificavel extends Serializable {
    /**
     * Obtém o ID da entidade.
     *
     * @return o ID da entidade, que deve ser único
     */
    Long getId();
}