import { Controller, Get } from '@nestjs/common';
import { VignettesService } from './vignettes.service';

@Controller('vignettes')
export class VignettesController {
  constructor(private service: VignettesService) {}

  @Get('/')
  async getAllVignettes() {}
}
