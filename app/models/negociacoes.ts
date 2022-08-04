import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = [];   

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    // lista(): readonly Negociacao[] {
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}