import Detector from "./detector";

export default class Frame {
    readonly boundingbox: Array<Detector>
    private readonly nome: string
    private readonly indice_lista: number

    constructor(boundingbox: Array<Detector>, nome: string, indice_lista: number) {
        this.boundingbox = boundingbox
        this.nome = nome
        this.indice_lista = indice_lista
    }

    
}


