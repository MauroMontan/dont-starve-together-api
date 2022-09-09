import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CrockpotRecipesService } from './crockpot_recipes.service';

@ApiTags('Crockpot Recipes')
@Controller('crockpot-recipes')
export class CrockpotRecipesController {
  constructor(private service: CrockpotRecipesService) {}

  @Get()
  async listRecipes() {
    return await this.service.getAll();
  }
}
