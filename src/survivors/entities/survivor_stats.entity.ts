import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SurvivorStats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  health: number;

  @Column()
  sanity: number;

  @Column()
  hunger: number;
}
