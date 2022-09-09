import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class CrockpotRecipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
