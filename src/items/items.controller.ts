import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from './dtos/dtos';
import { Item } from './entities/entities';
import { ItemsService } from './items.service';

@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private service: ItemsService) {}

  @Post()
  @ApiProperty({ type: [CreateItemDto] })
  async createItem(@Body() item: CreateItemDto): Promise<Item> {
    return await this.service.create(item);
  }

  @Get()
  async ListAllItems(): Promise<Item[]> {
    return await this.service.getAll();
  }
}
