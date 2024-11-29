package com.fatec.pl.verificador;

import com.fatec.pl.modelo.Telefone;

public class VerificadorTelefoneNulo implements Verificador<Telefone> {
    @Override
    public boolean verificar(Telefone telefone) {
        return telefone == null || telefone.getDdd() == null || telefone.getNumero() == null;
    }
}
