import { Controller, Get } from '@nestjs/common';
import { WardrobeService } from './wardrobe.service';

@Controller('skins')
export class WardrobeController {
  constructor(private service: WardrobeService) {}

  @Get()
  async getAllSkins() {
    return this.service.getAll();
  }
}
