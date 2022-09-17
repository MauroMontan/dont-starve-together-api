import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';
import { ItemCategory } from '../enums/enums';

export class CreateItemDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  asset: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty({
    isArray: true,
    enum: ItemCategory,
    enumName: 'Item categories',
  })
  @IsArray()
  category: ItemCategory[];
}
