import { Module } from '@nestjs/common';
import { CrockpotRecipesService } from './crockpot_recipes.service';
import { CrockpotRecipesResolver } from './crockpot_recipes.resolver';
import { DatabaseModule } from 'src/database/database.module';



@Module({
  imports: [DatabaseModule],
  providers: [CrockpotRecipesService, CrockpotRecipesResolver],
  controllers: [],
  exports: [CrockpotRecipesService],
})
export class CrockpotRecipesModule { }
