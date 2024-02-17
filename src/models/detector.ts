export default class Detector {
    private readonly _width : number
    private readonly _heigth: number
    private readonly _x: number
    private readonly _y: number
    private readonly _acertividade: number
    private readonly _classe: string
    private readonly _frame: string

    private constructor(width: number, heigth: number, x: number, y: number, acertividade: number, classe: string, frame: string) {
        this._width = width
        this._heigth = heigth
        this._x = x
        this._y = y
        this._acertividade = acertividade
        this._classe = classe
        this._frame = frame
    }

    static create(width: number, heigth: number, x: number, y: number, acertividade: number, classe: string, frame: string) {
        return new Detector(width, heigth, x, y, acertividade, classe, frame)
    }
    
    public get width() : number {
        return this._width
    }
    
    public get heigth() : number {
        return this._heigth
    }
 
    public get x() : number {
        return this._x
    }
    
    public get y() : number {
        return this._y
    }
    
    
    public get acertividade() : number {
        return this._acertividade
    }
    

    public get classe() : string {
        return this._classe
    }
    
    
    public get frame() : string {
        return this._frame
    }
    
}