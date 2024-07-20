import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";

@Entity("detector")
export class Detector {

    @PrimaryGeneratedColumn()
    id_detector: number;

    @Column({type: "real"})
    width : number
    
    @Column({type: "real"})
    heigth: number
    
    @Column({type: "real"})
    x: number
    
    @Column({type: "real"})
    y: number

    @Column({type: "real"})
    acertividade: number

    @Column({type: "varchar", length:100})
    classe: string

    
    @Column({type: "varchar", length:100})
    frame: string

    
}