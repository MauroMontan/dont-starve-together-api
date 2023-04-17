import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsString } from 'class-validator';
import { CookingTime, FoodType, Spoils } from '../enums/enums';
import { CreateRecipeStatsDto } from './createStats.dto';

export class CreateCrockpotRecipeDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty({ enum: FoodType, enumName: 'Food type' })
  @IsEnum(FoodType)
  type: FoodType;

  @ApiProperty({ enum: Spoils, enumName: 'Spoils' })
  @IsEnum(Spoils)
  spoils: Spoils;

  @ApiProperty({ enum: CookingTime, enumName: 'Cooking time' })
  @IsEnum(CookingTime)
  cookingTime: CookingTime;

  @ApiProperty()
  @IsString()
  asset?: string;

  @ApiProperty()
  @IsString()
  sideEffect?: string;

  @ApiProperty({ type: () => CreateRecipeStatsDto })
  stats: CreateRecipeStatsDto;

  @ApiProperty({ default: false })
  @IsBoolean()
  isWarlySpecial: boolean;
}
