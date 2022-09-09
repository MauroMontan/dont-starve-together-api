import { Test, TestingModule } from '@nestjs/testing';
import { CrockpotRecipesService } from './crockpot_recipes.service';

describe('CrockpotRecipesService', () => {
  let service: CrockpotRecipesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrockpotRecipesService],
    }).compile();

    service = module.get<CrockpotRecipesService>(CrockpotRecipesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
