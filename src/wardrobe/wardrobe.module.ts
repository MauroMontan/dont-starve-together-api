import { Module } from '@nestjs/common';
import { WardrobeController } from './wardrobe.controller';
import { WardrobeService } from './wardrobe.service';

@Module({
  controllers: [WardrobeController],
  providers: [WardrobeService]
})
export class WardrobeModule {}
