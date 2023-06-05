import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CrockpotRecipesModule } from './crockpot_recipes/crockpot_recipes.module';
import {
  CrockpotRecipe,
  RecipeStats,
} from './crockpot_recipes/entities/entities';
import {
  Backstory,
  Survivor,
  SurvivorStats,
} from './survivors/entities/entities';
import { Item } from './items/entities/entities';
import { UtilsModule } from './utils/utils.module';
import { Skin } from './skins/entities/entities';
import { Config } from './config/config.provider';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CrockpotRecipesResolver } from './crockpot_recipes/crockpot_recipes.resolver';
import { VignettesModule } from './vignettes/vignettes.module';
import { Vignette } from './vignettes/entities/vignette';

//WARNING: replace with the right database info
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: Config.DATABASE_URL,
      entities: [
        CrockpotRecipe,
        Survivor,
        RecipeStats,
        SurvivorStats,
        Item,
        Backstory,
        Skin,
        Vignette,
      ],
      synchronize: false, //TODO: change false on prod
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      nodeEnv: 'development',
      csrfPrevention: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    CrockpotRecipesModule,
    // SurvivorsModule, // not available data ... :p
    // ItemsModule,
    // SkinsModule,
    UtilsModule,
    VignettesModule,
  ],
  controllers: [AppController],
  providers: [AppService, CrockpotRecipesResolver],
})
export class AppModule {}
