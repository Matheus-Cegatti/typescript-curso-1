export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    constructor(private _data: Date,
        private _quantidade: number,
        private _valor: number) {}

    get data(): Date {
        const data = new Date(this._data.getTime()) //programação defensiva
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

    public static criaDe(datastring:string, quantidadestring:string, valorstring:string): Negociacao {
        const exp = /-/g; //expressao regular para achar todo e qualquer hifen
        const date = new Date(datastring.replace(exp, ","));
        const quantidade = parseInt(quantidadestring);
        const valor = parseFloat(valorstring);
        return new Negociacao(date, quantidade, valor);
    }
}