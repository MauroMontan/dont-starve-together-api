import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Backstory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  backstory: string;
}
