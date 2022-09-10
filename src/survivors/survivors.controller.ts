import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SurvivorsService } from './survivors.service';

@ApiTags('Survivors')
@Controller('survivors')
export class SurvivorsController {
  constructor(private service: SurvivorsService) { }

  @Post()
  async createSurvivor(@Body() survivor: any) {
    return this.service.create(survivor);
  }

  @Get()
  async listAllSurvivors() {
    return await this.service.getAll();
  }
}
