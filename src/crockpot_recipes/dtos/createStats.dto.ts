import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSkinStasDto {
  @ApiProperty()
  @IsString()
  name: string;
}
