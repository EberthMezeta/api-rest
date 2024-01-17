import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Anime {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    title: string = "";

    @Column()
    description: string = "";

    @ManyToOne(() => User, user => user.animes)
    user?: User;
}

