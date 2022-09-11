import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    try {
      return await this.survivorRepository.save(survivor);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          error: 'survivor already exists',
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  async getAll() {
    return await this.survivorRepository.find({
      relations: {
        entersTheConstantWith: true,
        backstory: true,
        favouriteFood: {
          stats: true,
        },
        stats: true,
      },
    });
  }
}
