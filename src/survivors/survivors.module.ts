import { Module } from '@nestjs/common';
import { SurvivorsService } from './survivors.service';
import { SurvivorsController } from './survivors.controller';

@Module({
  providers: [SurvivorsService],
  controllers: [SurvivorsController]
})
export class SurvivorsModule {}
