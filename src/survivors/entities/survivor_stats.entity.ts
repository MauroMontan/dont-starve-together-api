import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SurvivorStats {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('decimal')
  health: number;

  @Column('decimal')
  sanity: number;

  @Column('decimal')
  hunger: number;
}
