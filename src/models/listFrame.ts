import Frame from "./frame"
export default class ListFrame {
    
    private readonly data: Date
    private readonly indice_lista: number 
    
    
    private constructor(data: Date, indice_lista: number) {
        
        this.data = data
        this.indice_lista = indice_lista
    }
    static create(data: Date, indice_lista: number) {
        return new ListFrame(data, indice_lista)
    }
}

enum meses {
    janeiro,
    fevereiro,
    março,
    abril,
    maio,
    junho,
    julho,
    agosto,
    setembro,
    outubro,
    novembro,
    dezembro


}

let data = new Date()
let mes = meses
console.log(mes[data.getMonth()])
