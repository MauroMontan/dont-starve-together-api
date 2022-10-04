import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    return this.CrockpotRecipeRepository.save(recipe);
  }

  async getAll(): Promise<CrockpotRecipe[]> {
    return await this.CrockpotRecipeRepository.find({
      relations: {
        stats: true,
      },
    });
  }

  async getByName(name: string): Promise<CrockpotRecipe | HttpException> {
    try {
      return await this.CrockpotRecipeRepository.findOneOrFail({
        where: { name: name },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'recipe not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
