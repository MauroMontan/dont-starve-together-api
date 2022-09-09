import { CrockpotRecipe } from 'src/crockpot_recipes/entities/entities';
import { Perks, SurvivorStats } from './entities';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class Survivor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quote: string;

  @Column()
  birthDate: string;

  @OneToMany(() => Perks, (perk) => perk.survivor, { cascade: true })
  perks: Perks[];

  @OneToOne(() => CrockpotRecipe, { cascade: true })
  @JoinColumn({ name: 'favourite_food_id' })
  favouriteFood: CrockpotRecipe;

  @OneToOne(() => SurvivorStats, { cascade: true })
  @JoinColumn({ name: 'stats_id' })
  stats: SurvivorStats;
}
