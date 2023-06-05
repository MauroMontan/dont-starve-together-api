import { Module } from '@nestjs/common';
import { VignettesService } from './vignettes.service';
import { VignettesController } from './vignettes.controller';

@Module({
  providers: [VignettesService],
  controllers: [VignettesController],
})
export class VignettesModule {}
