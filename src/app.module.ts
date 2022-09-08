import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurvivorsModule } from './survivors/survivors.module';

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
      autoLoadEntities: true,
      synchronize: true, //TODO: change false on prod
    }),
    SurvivorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
