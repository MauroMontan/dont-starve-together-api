import { Test, TestingModule } from '@nestjs/testing';
import { WardrobeController } from './wardrobe.controller';

describe('WardrobeController', () => {
  let controller: WardrobeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WardrobeController],
    }).compile();

    controller = module.get<WardrobeController>(WardrobeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
