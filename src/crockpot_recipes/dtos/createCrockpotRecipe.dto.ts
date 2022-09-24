import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsString } from 'class-validator';
import { FoodType } from '../enums/enums';
import { CreateSkinStatsDto } from './createStats.dto';

export class CreateCrockpotRecipeDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ enum: FoodType, enumName: 'Food type' })
  @IsEnum(FoodType)
  type: FoodType;

  @ApiProperty()
  @IsString()
  asset?: string;

  @ApiProperty()
  @IsString()
  sideEffect?: string;

  @ApiProperty()
  stats: CreateSkinStatsDto;

  @ApiProperty()
  @IsBoolean()
  isWarlySpecial: boolean;
}
