import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skin } from './entities/entities';
import { WardrobeController } from './wardrobe.controller';
import { WardrobeService } from './wardrobe.service';

@Module({
  imports: [TypeOrmModule.forFeature([Skin])],
  controllers: [WardrobeController],
  providers: [WardrobeService],
})
export class WardrobeModule {}
