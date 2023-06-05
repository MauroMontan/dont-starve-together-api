import { Module } from '@nestjs/common';
import { CrockpotRecipesService } from './crockpot_recipes.service';
import { CrockpotRecipesController } from './crockpot_recipes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrockpotRecipe } from './entities/entities';
import { CrockpotRecipesResolver } from './crockpot_recipes.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([CrockpotRecipe])],
  providers: [CrockpotRecipesService, CrockpotRecipesResolver],
  controllers: [CrockpotRecipesController],
  exports: [CrockpotRecipesService],
})
export class CrockpotRecipesModule {}
