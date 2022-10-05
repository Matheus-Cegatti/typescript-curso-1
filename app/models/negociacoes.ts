import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // private negociacoes: Array<Negociacao> = []; //existe as duar formas de declarar o array, essa e a da linha abaixo
    private negociacoes: Negociacao[] = [];
    adiciona(negociacao :Negociacao) {
        this.negociacoes.push(negociacao)
    }

    // lista(): ReadonlyArray<Negociacao>  { //existe as duar formas de colocar readonly no array ( para não permitir modificaçoes no array como o "pop" por exemplo), essa e a da linha abaixo
        lista(): readonly Negociacao[]  {
        return this.negociacoes
    }
}