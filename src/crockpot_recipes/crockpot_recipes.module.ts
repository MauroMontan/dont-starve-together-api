import { Module } from '@nestjs/common';
import { CrockpotRecipesService } from './crockpot_recipes.service';
import { CrockpotRecipesController } from './crockpot_recipes.controller';

@Module({
  providers: [CrockpotRecipesService],
  controllers: [CrockpotRecipesController],
})
export class CrockpotRecipesModule {}
