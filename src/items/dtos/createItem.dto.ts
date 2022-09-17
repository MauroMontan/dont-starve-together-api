import { ApiProperty } from '@nestjs/swagger';
import { ItemCategory } from '../enums/enums';

export class CreateItemDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  asset: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  category: ItemCategory[];
}
