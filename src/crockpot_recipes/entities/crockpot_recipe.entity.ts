import {
	Column,
	PrimaryGeneratedColumn,
	OneToOne,
	Entity,
	JoinColumn,
} from 'typeorm';
import { CookingTime, FoodType, Spoils } from '../enums/enums';
import { RecipeStats } from './entities';

@Entity()
export class CrockpotRecipe {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	name: string;

	@Column({ type: 'enum', enum: FoodType })
	type: FoodType;

	@Column({ type: "enum", enum: Spoils })
	spoils: Spoils;

	@Column({ type: "enum", enum: CookingTime })
	cookingTime: CookingTime;


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
