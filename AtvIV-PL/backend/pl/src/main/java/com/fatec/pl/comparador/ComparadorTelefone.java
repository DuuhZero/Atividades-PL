package com.fatec.pl.comparador;

import java.util.Comparator;
import com.fatec.pl.modelo.Telefone;

public class ComparadorTelefone implements Comparator<Telefone> {

    @Override
    public int compare(Telefone o1, Telefone o2) {
        if (o1 == null && o2 == null) {
            return 0; // Ambos são nulos, considerados iguais
        }
        if (o1 == null) {
            return 1; // o1 é nulo, o2 não é nulo, então o2 é menor
        }
        if (o2 == null) {
            return -1; // o2 é nulo, o1 não é nulo, então o1 é menor
        }

        String id1 = o1.getDdd() + o1.getNumero();
        String id2 = o2.getDdd() + o2.getNumero();

        return id1.compareToIgnoreCase(id2); // Comparação sem considerar o caso
    }
}