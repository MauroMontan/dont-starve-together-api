import {
	Column,
	PrimaryGeneratedColumn,
	OneToOne,
	Entity,
	JoinColumn,
} from 'typeorm';
import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CookingTime, FoodType, Spoils } from '../enums/enums';
import { RecipeStats } from './entities';


registerEnumType(FoodType, {
	name: 'foodType',
	description: 'food type',
});


registerEnumType(FoodType, {
	name: 'foodType',
	description: 'food type',
});

registerEnumType(CookingTime, {
	name: 'cookingType',
	description: 'cooking time',
});

@Entity()
@ObjectType()
export class CrockpotRecipe {

	@PrimaryGeneratedColumn()
	@Field(() => Int)
	id?: number;

	@Column()
	@Field(() => String)
	name: string;

	@Column({ type: 'enum', enum: FoodType })
	@Field(() => String)
	type: FoodType;

	@Column({ type: "enum", enum: Spoils })
	@Field(() => String)
	spoils: Spoils;

	@Column({ type: "enum", enum: CookingTime })
	@Field(() => String)
	cookingTime: CookingTime;

	@Column({ nullable: true })
	@Field(() => String, { nullable: true })
	asset?: string;

	@Column({ nullable: true })
	@Field(() => String, { nullable: true })
	sideEffect?: string;

	@OneToOne(() => RecipeStats, { cascade: true })
	@JoinColumn({ name: 'recipe_stat_id' })
	@Field(() => RecipeStats)
	stats: RecipeStats;

	@Column({ nullable: false, default: false })
	@Field(() => Boolean)
	isWarlySpecial: boolean;

}
