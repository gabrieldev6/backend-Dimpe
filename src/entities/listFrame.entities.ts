import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("listFrame")
export class ListFrame {

    @PrimaryGeneratedColumn()
    id_list: number;

    @Column({type: "varchar", length:100})
    data: Date

    @Column({type: "varchar", length:100})
    capa : string
    

    
}