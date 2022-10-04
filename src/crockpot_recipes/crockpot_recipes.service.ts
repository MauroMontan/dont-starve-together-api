import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrockpotRecipe } from './entities/entities';
import { Injectable } from '@nestjs/common';
import { CreateCrockpotRecipeDto } from './dtos/dtos';

@Injectable()
export class CrockpotRecipesService {
  constructor(
    @InjectRepository(CrockpotRecipe)
    private CrockpotRecipeRepository: Repository<CrockpotRecipe>,
  ) { }

  async create(recipe: CreateCrockpotRecipeDto): Promise<CrockpotRecipe> {
    return this.CrockpotRecipeRepository.save(recipe);
  }

  async getAll(): Promise<CrockpotRecipe[]> {
    return await this.CrockpotRecipeRepository.find({
      relations: {
        stats: true,
      },
    });
  }

  async getByName(name: string): Promise<CrockpotRecipe> {
    return await this.CrockpotRecipeRepository.findOne({
      where: { name: name },
    });
  }
}
