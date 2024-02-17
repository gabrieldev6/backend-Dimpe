import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios")
export class Usuario {
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({type: "text", nullable: false})
    nome: string;

    @Column({ type: "text", nullable: false })
    email: string;

    @Column({ type: "text", nullable: false})
    senha: string;

    @Column({type: "text", nullable: true})
    foto: string | null


}