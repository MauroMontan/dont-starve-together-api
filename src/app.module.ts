import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurvivorsModule } from './survivors/survivors.module';
import { CrockpotRecipesModule } from './crockpot_recipes/crockpot_recipes.module';
import { CrockpotRecipe } from './crockpot_recipes/entities/crockpot_recipe.entity';
import { Perks, Survivor } from './survivors/entities/entities';

//WARNING: replace with the right database info
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'root',
      password: 'root',
      database: 'dst-dev-db',
      entities: [CrockpotRecipe, Survivor, Perks],
      synchronize: true, //TODO: change false on prod
    }),
    CrockpotRecipesModule,
    SurvivorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
