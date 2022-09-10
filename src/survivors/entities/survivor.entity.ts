import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Item } from 'src/items/entities/entities';
import { CrockpotRecipe } from 'src/crockpot_recipes/entities/entities';
import { SurvivorStats, Backstory } from './entities';

@Entity()
export class Survivor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  quote: string;

  @Column()
  birthDate: string;

  @Column()
  animatedShort: string;

  @Column('simple-array')
  perks: string[];

  @OneToOne(() => CrockpotRecipe, { cascade: true })
  @JoinColumn({ name: 'favourite_food_id' })
  favouriteFood: CrockpotRecipe;

  @OneToOne(() => SurvivorStats, { cascade: true })
  @JoinColumn({ name: 'stats_id' })
  stats: SurvivorStats;

  @OneToMany(() => Item, (item) => item.survivor, { cascade: true })
  entersTheConstantWith: Item[];

  @OneToOne(() => Backstory, { cascade: true })
  @JoinColumn({ name: 'backstory_id' })
  backstory: Backstory;
}
