import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("listFrame")
export class ListFrame {

    @PrimaryGeneratedColumn()
    id_list: number;

    @Column({type: "text"})
    data: Date

    @Column({type: "text"})
    capa : string
    

    
}