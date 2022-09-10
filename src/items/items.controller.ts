import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private service: ItemsService) {}

  @Post()
  async createItem(@Body() item: any) {
    return await this.service.create(item);
  }

  @Get()
  async ListAllItems() {
    return await this.service.getAll();
  }
}
