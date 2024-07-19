import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("frame")
export class Frame {

    @PrimaryGeneratedColumn()
    id_frame: number;

    @Column({type: "varchar", length:100})
    caminho: string

    @Column({type: "varchar", length:100})
    nome: string

    @Column({type: "integer"})
    indice_lista : number
    
    @Column({type: "integer"})
    altura: number

    @Column({type: "integer"})
    largura: number
    
}