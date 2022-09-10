import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CrockpotRecipesService } from './crockpot_recipes.service';

@ApiTags('Crockpot Recipes')
@Controller('crockpot-recipes')
export class CrockpotRecipesController {
  constructor(private service: CrockpotRecipesService) {}

  @Post()
  async createCrockpotRecipe(@Body() recipe: any) {
    return this.service.create(recipe);
  }

  @Get()
  async listRecipes() {
    return await this.service.getAll();
  }
}
