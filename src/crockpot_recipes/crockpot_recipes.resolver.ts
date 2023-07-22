import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { CrockpotRecipe } from './dtos/createCrockpotRecipe.dto';
import { CrockpotRecipesService } from './crockpot_recipes.service';

@Resolver(() => CrockpotRecipe)
export class CrockpotRecipesResolver {
  constructor(private service: CrockpotRecipesService) { }

  @Query(() => [CrockpotRecipe], { name: 'crockpotRecipes' })
  async recipes(
    @Args("offset", { type: () => Int, nullable: true, defaultValue: 1 }) offset: number,
    @Args("limit", { type: () => Int, nullable: true, defaultValue: 80 }) limit: number,
  ): Promise<CrockpotRecipe[]> {
    return await this.service.getAll(limit, offset);
  }
}
