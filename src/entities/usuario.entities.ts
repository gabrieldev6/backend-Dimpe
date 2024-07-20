import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios")
export class Usuario {
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({type: "varchar", nullable: false, length:100})
    nome: string;

    @Column({ type: "varchar", nullable: false , length:100})
    email: string;

    @Column({ type: "varchar", nullable: false, length:100})
    senha: string;

    @Column({type: "varchar", nullable: true, length:100})
    foto: string | null


}