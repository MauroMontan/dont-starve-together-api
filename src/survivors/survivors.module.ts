import { Module } from '@nestjs/common';
import { SurvivorsService } from './survivors.service';
import { SurvivorsController } from './survivors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survivor } from './entities/entities';
import { CrockpotRecipesService } from 'src/crockpot_recipes/crockpot_recipes.service';
import { CrockpotRecipesModule } from 'src/crockpot_recipes/crockpot_recipes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Survivor]), CrockpotRecipesModule],
  providers: [SurvivorsService],
  controllers: [SurvivorsController],
})
export class SurvivorsModule { }
