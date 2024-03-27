import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Frame } from "./frame.entities";

@Entity("detector")
export class Detector {

    @PrimaryGeneratedColumn()
    id_detector: number;

    @Column({type: "float"})
    width : number
    
    @Column({type: "float"})
    heigth: number
    
    @Column({type: "float"})
    x: number
    
    @Column({type: "float"})
    y: number

    @Column({type: "float"})
    acertividade: number

    @Column({type: "text"})
    classe: string

    
    @Column({type: "text"})
    frame: string

    
}