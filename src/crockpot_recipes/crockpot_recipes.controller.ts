import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CrockpotRecipesService } from './crockpot_recipes.service';
import { CreateCrockpotRecipeDto } from './dtos/dtos';
import { CrockpotRecipe } from './entities/entities';

@ApiTags('Crockpot Recipes')
@Controller('crockpot-recipes')
export class CrockpotRecipesController {
  constructor(private service: CrockpotRecipesService) { }

  /**
  * This controller creates a new recipe
  * @param CrockpotRecipe
  * @returns CrockpotRecipe
  **/

  // @Post()
  // disabled for prod till auth
  async createCrockpotRecipe(
    @Body() recipe: CreateCrockpotRecipeDto,
  ): Promise<CrockpotRecipe> {
    return this.service.create(recipe);
  }

  /**
  * This controller returns all the recipes 
  * @returns CrockpotRecipe[]
  **/
  @Get()
  async getRecipes(): Promise<CrockpotRecipe[]> {
    return await this.service.getAll();
  }


  /**
   * This controller returns all Warlys recipes
   * @returns CrockpotRecipe[]
  **/
  @Get('warlys-recipes')
  async getWarlyRecipes(): Promise<CrockpotRecipe[] | HttpException> {
    return await this.service.getWarlyRecipes();
  }

  /**
   * This controller returns a recipe object by name
   * @param name - a string value
   * @returns CrockpotRecipe Object
   *
   **/
  @Get(':name')
  async getRecipeByName(@Param('name') name: string): Promise<CrockpotRecipe> {
    return await this.service.getByName(name);
  }
}