import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBackstoryDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  backstory: string;
}
