import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private service: ItemsService) {}

  @Get()
  async ListAllItems() {
    return await this.service.getAll();
  }
}
