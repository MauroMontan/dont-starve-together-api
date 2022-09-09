import { Controller, Get } from '@nestjs/common';
import { CrockpotRecipesService } from './crockpot_recipes.service';

@Controller('crockpot-recipes')
export class CrockpotRecipesController {
  constructor(private service: CrockpotRecipesService) {}

  @Get()
  async listRecipes() {
    return await this.service.getAll();
  }
}
