import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UtilsService } from 'src/utils/utils.service';
import { Repository } from 'typeorm';
import { CreateSurvivorDto } from './dtos/dtos';
import { Survivor } from './entities/entities';
import { CrockpotRecipe } from 'src/crockpot_recipes/entities/crockpot_recipe.entity';
import { CrockpotRecipesService } from 'src/crockpot_recipes/crockpot_recipes.service';

@Injectable()
export class SurvivorsService {
  constructor(
    @InjectRepository(Survivor)
    private survivorRepository: Repository<Survivor>,
    private crockpotRecipeService: CrockpotRecipesService,
    private utils: UtilsService,
  ) {}

  private relations = {
    entersTheConstantWith: true,
    backstory: true,
    skins: true,
    favouriteFood: {
      stats: true,
    },
    stats: true,
  };

  async create(survivor: CreateSurvivorDto): Promise<Survivor> {
    let name = this.utils.capitalize(survivor.name);

    let recipeName = '';

    console.log(survivor.favouriteFood);
    if (survivor.favouriteFood === undefined) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'recipe does not exist',
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    if (survivor.favouriteFood != undefined) {
      recipeName = this.utils.capitalize(survivor.favouriteFood.name);
    }

    let existingSurvivor: Survivor = await this.getByName(survivor.name);
    let existingRecipe: CrockpotRecipe =
      await this.crockpotRecipeService.getByName(recipeName);
    console.log(existingSurvivor);
    if (!existingSurvivor) {
      if (!existingRecipe) {
        return await this.survivorRepository.save({ ...survivor, name });
      } else {
        return await this.survivorRepository.save({
          ...survivor,
          name,
          favourite_food_id: existingRecipe.id,
          favouriteFood: null,
        });
      }
    } else {
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

  async getByName(name: string): Promise<Survivor> {
    try {
      const survivorName = this.utils.capitalize(name);
      return await this.survivorRepository.findOne({
        where: { name: survivorName },
        relations: this.relations,
      });
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
}
