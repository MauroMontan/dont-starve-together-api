import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSkinDto } from './dtos/createSkin.dto';
import { Skin } from './entities/entities';
import { SkinsService } from './skins.service';

@ApiTags('Skins')
@Controller('skins')
export class SkinsController {
  constructor(private service: SkinsService) { }

  @Post()
  async createSkin(@Body() skin: CreateSkinDto): Promise<Skin | HttpException> {
    return await this.service.create(skin);
  }

  @Get()
  async getSkins(): Promise<Skin[]> {
    return await this.service.getAll();
  }
}
