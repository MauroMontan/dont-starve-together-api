import { Module } from '@nestjs/common';
import { SurvivorsService } from './survivors.service';
import { SurvivorsController } from './survivors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survivor } from './entities/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Survivor])],
  providers: [SurvivorsService],
  controllers: [SurvivorsController],
})
export class SurvivorsModule { }
