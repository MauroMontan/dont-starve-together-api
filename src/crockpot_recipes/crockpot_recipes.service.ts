import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CrockpotRecipe } from './entities/entities';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCrockpotRecipeDto } from './dtos/dtos';
import { UtilsService } from 'src/utils/utils.service';

@Injectable()
export class CrockpotRecipesService {
  constructor(
    @InjectRepository(CrockpotRecipe)
    private CrockpotRecipeRepository: Repository<CrockpotRecipe>,
    private utils: UtilsService,
  ) { }



  async create(recipe: CreateCrockpotRecipeDto): Promise<CrockpotRecipe> {
    let existingRecipe: CrockpotRecipe;
    let name = this.utils.capitalize(recipe.name);

    existingRecipe = await this.getByName(name);

    if (existingRecipe === null) {
      return this.CrockpotRecipeRepository.save({ ...recipe, name });
    } else {
      throw new HttpException("recipe already exists", HttpStatus.UNPROCESSABLE_ENTITY)
    }
  }

  async getAll(): Promise<CrockpotRecipe[]> {
    return await this.CrockpotRecipeRepository.find({
      relations: {
        stats: true,
      },
    });
  }

  async getByName(name: string): Promise<CrockpotRecipe> {
    name = this.utils.capitalize(name);
    const recipes = this.CrockpotRecipeRepository.findOne({
      where: { name: name },
    });

    return await recipes;

  }

  async getWarlyRecipes(): Promise<CrockpotRecipe[] | HttpException> {
    try {
      return await this.CrockpotRecipeRepository.find({
        where: {
          isWarlySpecial: true,
        },
        relations: {
          stats: true,
        },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'recipes not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
