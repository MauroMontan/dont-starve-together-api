import { Controller, Get } from '@nestjs/common';
import { SkinsService } from './skins.service';

@Controller('skins')
export class SkinsController {
  constructor(private service: SkinsService) {}

  @Get()
  async getAllSkins() {
    return this.service.getAll();
  }
}
