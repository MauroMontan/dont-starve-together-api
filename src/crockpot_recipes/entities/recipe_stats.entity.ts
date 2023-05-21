import { Field, ObjectType, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class RecipeStats {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id?: number;

  @Column('decimal')
  @Field(() => Float)
  sanity: number;

  @Column('decimal')
  @Field(() => Float)
  hunger: number;

  @Column('decimal')
  @Field(() => Float)
  health: number;
}
