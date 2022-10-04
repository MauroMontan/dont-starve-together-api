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

  @Post()
  async createCrockpotRecipe(
    @Body() recipe: CreateCrockpotRecipeDto,
  ): Promise<CrockpotRecipe> {
    return this.service.create(recipe);
  }

  @Get()
  async getRecipes(): Promise<CrockpotRecipe[]> {
    return await this.service.getAll();
  }

  @Get(':name')
  async getRecipeByName(
    @Param('name') name: string,
  ): Promise<CrockpotRecipe | HttpException> {
    return await this.service.getByName(name);
  }
}
