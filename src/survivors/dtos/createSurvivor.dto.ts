import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';
import {
  CreateCrockpotRecipeDto,
} from 'src/crockpot_recipes/dtos/dtos';
import { CreateItemDto } from 'src/items/dtos/dtos';
import { CreateSkinDto } from 'src/skins/dtos/dtos';
import { CreateSurvivorStatsDto, CreateBackstoryDto } from './dtos';
import { Backstory } from '../entities/backstory.entity';

export class CreateSurvivorDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  bigportrait: string;

  @ApiProperty()
  @IsString()
  portrait: string;

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

  @ApiProperty({ type: () => CreateSurvivorStatsDto })
  stats: CreateSurvivorStatsDto;

  @ApiProperty({ isArray: true, type: CreateItemDto })
  @IsArray()
  entersTheConstantWith: CreateItemDto[];

  @ApiProperty({ type: () => Backstory })
  backstory: CreateBackstoryDto;

  @ApiProperty({ isArray: true, type: CreateSkinDto })
  skins: CreateSkinDto[];
}
