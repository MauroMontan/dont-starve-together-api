import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RecipeStats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  sanity: number;

  @Column('decimal')
  hunger: number;

  @Column('decimal')
  health: number;
}
