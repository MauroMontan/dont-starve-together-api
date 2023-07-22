import { IsBoolean, IsEnum, IsString } from 'class-validator';
import { CookingTime, FoodType, Spoils } from '../enums/enums';
import { Stats } from './createStats.dto';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';


registerEnumType(FoodType, {
  name: 'foodType',
  description: 'food type enum',
});


@ObjectType()
export class CrockpotRecipe {
  @IsString()
  @Field(type => String)
  name: string;

  @IsEnum(FoodType)
  @Field(type => String)
  type: FoodType;

  @IsEnum(Spoils)
  @Field(type => String)
  spoils: Spoils;

  @IsEnum(CookingTime)
  @Field(type => String)
  cookingTime: CookingTime;

  @IsString()
  @Field(type => String)
  asset?: string;

  @IsString()
  @Field(type => String)
  sideEffect?: string;

  @Field(type => Stats)
  stats: Stats;

  @IsBoolean()
  @Field(type => Boolean)
  isWarlySpecial: boolean;
  /*  

    
  
   
  
    
  
   */
}
