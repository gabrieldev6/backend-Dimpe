import Detector from "./detector";

export default class Frame {
    private readonly _boundingbox: Array<Detector>
    private readonly _nome: string
    private readonly _indice_lista: number
    private readonly _largura: number
    private readonly _altura: number

    constructor(boundingbox: Array<Detector>, nome: string, indice_lista: number, largura:number, altura:number) {
        this._boundingbox = boundingbox
        this._nome = nome
        this._indice_lista = indice_lista
        this._largura = largura
        this._altura = altura
    }

    
    public get nome() : string {
        return this._nome
    }
    
    public get boundingbox() : Array<Detector> {
        return this._boundingbox
    }
    
    
    public get indice_lista() : number {
        return this._indice_lista
    }
    
    public get largura() : number {
        return this._largura
    }

    public get altura() : number {
        return this._altura
    }
    
    
    
}


