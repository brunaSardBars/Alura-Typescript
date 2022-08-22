import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes>{
    //private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = [];   

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    // lista(): readonly Negociacao[] {
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    public imprimir(): string {
        return JSON.stringify(this.negociacoes);
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    } 
}