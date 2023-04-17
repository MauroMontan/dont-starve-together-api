import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSkinDto } from './dtos/createSkin.dto';
import { Skin } from './entities/entities';
import { Collection } from './enums/collections.enum';
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

  @Get(':name')
  async getSkin(@Param('name') name: string): Promise<Skin> {
    return await this.service.getByName(name);
  }

  @Get("/by-survivor/:name")
  async getAllSurvivorSkins(@Param("name") name: string): Promise<Skin[]> {
    return await this.service.getBySurvivor(name);
  }


  @Get('/collections/:collection')
  async getSkinByCollection(
    @Param('collection') collection: Collection,
  ): Promise<Skin[] | HttpException> {
    return await this.service.getByCollection(collection);
  }
}
