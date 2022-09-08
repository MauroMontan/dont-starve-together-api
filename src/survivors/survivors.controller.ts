import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('survivors')
@Controller('survivors')
export class SurvivorsController {}
