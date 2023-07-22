import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrockpotRecipesModule } from './crockpot_recipes/crockpot_recipes.module';
import { UtilsModule } from './utils/utils.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CrockpotRecipesResolver } from './crockpot_recipes/crockpot_recipes.resolver';
import { DatabaseModule } from './database/database.module';




const typeDefs = `#graphql

type Stats {
  sanity: Float!
  hunger: Float!
  health: Float!
}

type CrockpotRecipe {
  name: String!
  type: String!
  spoils: String!
  cookingTime: String!
  asset: String!
  sideEffect: String!
  stats: Stats!
  isWarlySpecial: Boolean!
}

type Query {
  crockpotRecipes(offset: Int, limit: Int): [CrockpotRecipe!]!
}
`


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: "/",
      playground: false,
      nodeEnv: 'development',
      csrfPrevention: false,
      typeDefs: typeDefs,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    CrockpotRecipesModule,
    UtilsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, CrockpotRecipesResolver],
})
export class AppModule { }
