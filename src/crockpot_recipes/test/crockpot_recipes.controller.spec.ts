import { Test, TestingModule } from '@nestjs/testing';
import { CrockpotRecipesController } from './crockpot_recipes.controller';

describe('CrockpotRecipesController', () => {
  let controller: CrockpotRecipesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrockpotRecipesController],
    }).compile();

    controller = module.get<CrockpotRecipesController>(
      CrockpotRecipesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
