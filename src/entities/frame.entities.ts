import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("frame")
export class Frame {

    @PrimaryGeneratedColumn()
    id_frame: number;
    @Column({type: "text"})
    caminho: string

    @Column({type: "text"})
    nome: string

    @Column({type: "integer"})
    indice_lista : number
    

    
}