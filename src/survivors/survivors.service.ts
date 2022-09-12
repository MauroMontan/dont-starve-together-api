import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UtilsService } from 'src/utils/utils.service';
import { Repository } from 'typeorm';
import { Survivor } from './entities/entities';

@Injectable()
export class SurvivorsService {
  constructor(
    @InjectRepository(Survivor)
    private survivorRepository: Repository<Survivor>,
    private utils: UtilsService,
  ) {}

  private relations = {
    entersTheConstantWith: true,
    backstory: true,
    favouriteFood: {
      stats: true,
    },
    stats: true,
  };

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
      relations: this.relations,
    });
  }

  async getOne(name: string) {
    const survivorName = this.utils.capitalize(name);
    return await this.survivorRepository.findOne({
      where: { name: survivorName },
      relations: this.relations,
    });
  }
}
