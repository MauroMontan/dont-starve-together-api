import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skin } from './entities/entities';
import { SkinsController } from './skins.controller';
import { SkinsService } from './skins.service';

@Module({
  imports: [TypeOrmModule.forFeature([Skin])],
  controllers: [SkinsController],
  providers: [SkinsService],
})
export class SkinsModule {}
