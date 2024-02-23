import Frame from "./frame"
export default class ListFrame {
    readonly frames: Array<Frame>
    private readonly data: Date
    private readonly indice: number 
    
    constructor(frames: Array<Frame>, data: Date, indice: number) {
        this.frames = frames
        this.data = data
        this.indice = indice
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
