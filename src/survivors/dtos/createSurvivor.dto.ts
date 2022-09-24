import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';
import {
  CreateBackstoryDto,
  CreateCrockpotRecipeDto,
} from 'src/crockpot_recipes/dtos/dtos';
import { CreateItemDto } from 'src/items/dtos/dtos';
import { CreateSkinDto } from 'src/skins/dtos/dtos';
import { CreateSurvivorStatsDto } from './dtos';

export class CreateSurvivorDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  nickname: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  quote: string;

  @ApiProperty()
  @IsString()
  birthDate: string;

  @ApiProperty()
  @IsString()
  animatedShort: string;

  @ApiProperty()
  @IsArray()
  perks: string[];

  @ApiProperty()
  favouriteFood: CreateCrockpotRecipeDto;

  // @ApiProperty()
  // stats: CreateSurvivorStatsDto;

  @ApiProperty({ isArray: true, type: CreateItemDto })
  @IsArray()
  entersTheConstantWith: CreateItemDto[];

  @ApiProperty()
  backstory: CreateBackstoryDto;

  @ApiProperty({ isArray: true, type: CreateSkinDto })
  skins: CreateSkinDto[];
}
