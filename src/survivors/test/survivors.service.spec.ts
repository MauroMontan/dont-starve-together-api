import { Test, TestingModule } from '@nestjs/testing';
import { SurvivorsService } from './survivors.service';

describe('SurvivorsService', () => {
  let service: SurvivorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurvivorsService],
    }).compile();

    service = module.get<SurvivorsService>(SurvivorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
