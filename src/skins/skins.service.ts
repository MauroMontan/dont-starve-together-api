import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSkinDto } from './dtos/dtos';
import { Skin } from './entities/entities';

@Injectable()
export class SkinsService {
  constructor(
    @InjectRepository(Skin) private skinRepository: Repository<Skin>,
  ) { }

  async create(skin: CreateSkinDto): Promise<Skin | HttpException> {
    try {
      return await this.skinRepository.save(skin);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'survivor does not exist',
        },
        HttpStatus.NOT_FOUND,
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
}
