import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSurvivorDto } from './dtos/dtos';
import { Survivor } from './entities/entities';
import { SurvivorsService } from './survivors.service';

@ApiTags('Survivors')
@Controller('survivors')
export class SurvivorsController {
  constructor(private service: SurvivorsService) { }

  @Post()
  async createSurvivor(
    @Body() survivor: CreateSurvivorDto,
  ): Promise<Survivor | HttpException> {
    return await this.service.create(survivor);
  }

  @Get()
  async getSurvivors(): Promise<Survivor[]> {
    return await this.service.getAll();
  }

  @Get(':name')
  async getSurvivorByName(@Param('name') name: string): Promise<Survivor | HttpException> {
    return await this.service.getByName(name);
  }
}
