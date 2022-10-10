export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime()); //programação defensiva
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    static criaDe(datastring, quantidadestring, valorstring) {
        const exp = /-/g; //expressao regular para achar todo e qualquer hifen
        const date = new Date(datastring.replace(exp, ","));
        const quantidade = parseInt(quantidadestring);
        const valor = parseFloat(valorstring);
        return new Negociacao(date, quantidade, valor);
    }
}
