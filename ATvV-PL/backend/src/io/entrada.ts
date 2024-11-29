import promptSync from "prompt-sync";

export default class Entrada {
    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let texto = prompt(mensagem);
        return texto;
    }

    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(mensagem);
        let numero = new Number(valor);
        return numero.valueOf();
    }
}