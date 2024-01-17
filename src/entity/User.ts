import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Anime } from "./Anime"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number = 0


    @Column()
    username: string = ""

    @Column()
    firstName: string = ""

    @Column()
    lastName: string = ""

    @Column()
    age: number = 0

    @Column()
    password: string = ""

    @OneToMany(() => Anime, anime => anime.user)
    animes?: Anime[];
}   
