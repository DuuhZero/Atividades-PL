package com.fatec.pl.verificador;

public class VerificadorStringNula implements Verificador<String> {
    @Override
    public boolean verificar(String valor) {
        return valor == null || valor.trim().isEmpty();
    }
}
