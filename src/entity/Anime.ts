import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Anime {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    title: string = "";

    @Column()
    description: string = "";
}

