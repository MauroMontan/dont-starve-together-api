import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skin } from './entities/entities';

@Injectable()
export class SkinsService {
  constructor(
    @InjectRepository(Skin) private skinRepository: Repository<Skin>,
  ) {}

  async getAll() {
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
