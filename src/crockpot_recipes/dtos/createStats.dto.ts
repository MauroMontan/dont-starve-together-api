import { Field, Float, ObjectType } from '@nestjs/graphql';
import { IsDecimal } from 'class-validator';


@ObjectType()
export class Stats {

  @IsDecimal()
  @Field(type => Float)
  sanity: number;

  @IsDecimal()
  @Field(type => Float)
  hunger: number;

  @IsDecimal()
  @Field(type => Float)
  health: number;
}
