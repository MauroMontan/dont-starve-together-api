import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SurvivorsService } from './survivors.service';

@ApiTags('Survivors')
@Controller('survivors')
export class SurvivorsController {
  constructor(private service: SurvivorsService) {}

  @Post()
  async createSurvivor(@Body() survivor: any) {
    return this.service.create(survivor);
  }

  @Get()
  async listAllSurvivors() {
    return await this.service.getAll();
  }

  @Get(':name')
  async getOneSurvivor(@Param('name') name: string) {
    return await this.service.getOne(name);
  }
}
