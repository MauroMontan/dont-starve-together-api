import { Test, TestingModule } from '@nestjs/testing';
import { SkinsController } from './skins.controller';

describe('WardrobeController', () => {
  let controller: SkinsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkinsController],
    }).compile();

    controller = module.get<SkinsController>(SkinsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
