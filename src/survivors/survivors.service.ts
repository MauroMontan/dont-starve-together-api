import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survivor } from './entities/entities';

@Injectable()
export class SurvivorsService {
  constructor(
    @InjectRepository(Survivor)
    private survivorRepository: Repository<Survivor>,
  ) {}

  async create(survivor: Survivor) {
    return await this.survivorRepository.save(survivor);
  }

  async getAll() {
    return await this.survivorRepository.find({
      relations: {
        perks: true,
        favouriteFood: {
          stats: true,
        },
        stats: true,
      },
    });
  }
}
