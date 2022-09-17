import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Survivor } from './entities/entities';
import { SurvivorsService } from './survivors.service';

@ApiTags('Survivors')
@Controller('survivors')
export class SurvivorsController {
  constructor(private service: SurvivorsService) {}

  @Post()
  async createSurvivor(
    @Body() survivor: any,
  ): Promise<Survivor | HttpException> {
    return await this.service.create(survivor);
  }

  @Get()
  async listAllSurvivors(): Promise<Survivor[]> {
    return await this.service.getAll();
  }

  @Get(':name')
  async getOneSurvivor(@Param('name') name: string): Promise<Survivor> {
    return await this.service.getOne(name);
  }
}
