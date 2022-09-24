import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsString } from 'class-validator';
import { RecipeStats } from '../entities/entities';
import { FoodType } from '../enums/enums';

export class CreateCrockpotRecipeDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ enum: FoodType, enumName: "Food type" })
  @IsEnum(FoodType)
  type: FoodType;

  @ApiProperty()
  @IsString()
  asset?: string;

  @ApiProperty()
  @IsString()
  sideEffect?: string;

  @ApiProperty()
  stats: RecipeStats;

  @ApiProperty()
  @IsBoolean()
  isWarlySpecial: boolean;
}
