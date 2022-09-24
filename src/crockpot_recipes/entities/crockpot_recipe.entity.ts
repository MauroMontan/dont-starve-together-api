import {
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  Entity,
  JoinColumn,
} from 'typeorm';
import { FoodType } from '../enums/enums';
import { RecipeStats } from './entities';

@Entity()
export class CrockpotRecipe {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  type: FoodType;

  @Column({ nullable: true })
  asset?: string;

  @Column({ nullable: true })
  sideEffect?: string;

  @OneToOne(() => RecipeStats, { cascade: true })
  @JoinColumn({ name: 'recipe_stat_id' })
  stats: RecipeStats;

  @Column({ nullable: false, default: false })
  isWarlySpecial: boolean;
}
