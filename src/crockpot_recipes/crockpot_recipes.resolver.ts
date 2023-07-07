import { Args, Query, Resolver } from '@nestjs/graphql';
import { CrockpotRecipe } from './entities/crockpot_recipe.entity';
import { CrockpotRecipesService } from './crockpot_recipes.service';

@Resolver(() => CrockpotRecipe)
export class CrockpotRecipesResolver {
  constructor(private service: CrockpotRecipesService) { }

  @Query(() => [CrockpotRecipe], { name: 'crockpotRecipes' })
  async recipes(limit: number): Promise<CrockpotRecipe[]> {
    return await this.service.getAll(limit);
  }

  @Query(() => CrockpotRecipe, { name: 'crockpotRecipeByName' })
  async recipe(
    @Args('name', { type: () => String }) name: string,
  ): Promise<CrockpotRecipe> {
    return await this.service.getByName(name);
  }
}
