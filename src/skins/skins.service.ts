import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UtilsService } from 'src/utils/utils.service';
import { Repository } from 'typeorm';
import { CreateSkinDto } from './dtos/dtos';
import { Skin } from './entities/entities';
import { Collection } from './enums/collections.enum';

@Injectable()
export class SkinsService {
  constructor(
    @InjectRepository(Skin) private skinRepository: Repository<Skin>,
    private utils: UtilsService,
  ) { }

  async create(skin: CreateSkinDto): Promise<Skin | HttpException> {
    try {
      return await this.skinRepository.save(skin);
    } catch (error) {
      if (error.code === '23503') {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'not survivor found',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          error: 'Skin already exists',
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }
  async getAll(): Promise<Skin[]> {
    return this.skinRepository.find({
      relations: {
        survivor: true,
      },
      select: {
        survivor: {
          name: true,
        },
      },
    });
  }

  async getByName(name: string): Promise<Skin> {
    try {
      name = this.utils.capitalize(name);
      return await this.skinRepository.findOneByOrFail({ name: name });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'skin does not exist',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async getAllByCollections(collection: Collection): Promise<Skin[]> {
    try {
      return this.skinRepository.find({
        where: { collection },
        relations: {
          survivor: true,
        },
        select: {
          survivor: {
            name: true,
          },
        },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'skin does not exist',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
