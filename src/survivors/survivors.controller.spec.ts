import { Test, TestingModule } from '@nestjs/testing';
import { SurvivorsController } from './survivors.controller';

describe('SurvivorsController', () => {
  let controller: SurvivorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurvivorsController],
    }).compile();

    controller = module.get<SurvivorsController>(SurvivorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
