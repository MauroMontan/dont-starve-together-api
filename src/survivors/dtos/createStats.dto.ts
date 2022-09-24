import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal } from 'class-validator';

export class CreateSurvivorStatsDto {
  @ApiProperty()
  @IsDecimal()
  sanity: number;

  @ApiProperty()
  @IsDecimal()
  hunger: number;

  @ApiProperty()
  @IsDecimal()
  health: number;
}
