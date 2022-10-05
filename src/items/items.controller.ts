import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from './dtos/dtos';
import { Item } from './entities/entities';
import { ItemsService } from './items.service';

@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private service: ItemsService) { }

  @Post()
  @ApiProperty({ type: [CreateItemDto] })
  async createItem(@Body() item: CreateItemDto): Promise<Item> {
    return await this.service.create(item);
  }

  @Get()
  async getItems(): Promise<Item[]> {
    return await this.service.getAll();
  }

  @Get(':name')
  async getItemByName(@Param('name') name: string): Promise<Item | HttpException> {
    return await this.service.getByName(name);
  }
}
