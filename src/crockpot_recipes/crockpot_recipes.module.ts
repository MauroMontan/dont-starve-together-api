import { Module } from '@nestjs/common';
import { CrockpotRecipesService } from './crockpot_recipes.service';
import { CrockpotRecipesController } from './crockpot_recipes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrockpotRecipe } from './entities/entities';

@Module({
  imports: [TypeOrmModule.forFeature([CrockpotRecipe])],
  providers: [CrockpotRecipesService],
  controllers: [CrockpotRecipesController],
  exports: [CrockpotRecipesService]
})
export class CrockpotRecipesModule { }
