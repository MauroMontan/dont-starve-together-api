import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RecipeStats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sanity: number;

  @Column()
  hunger: number;

  @Column()
  health: number;
}
