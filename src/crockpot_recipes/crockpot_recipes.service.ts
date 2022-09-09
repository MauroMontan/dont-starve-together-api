import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrockpotRecipe } from './entities/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CrockpotRecipesService {
  constructor(
    @InjectRepository(CrockpotRecipe)
    private CrockpotRecipeRepository: Repository<CrockpotRecipe>,
  ) {}

  async getAll() {
    return await this.CrockpotRecipeRepository.find();
  }
}
