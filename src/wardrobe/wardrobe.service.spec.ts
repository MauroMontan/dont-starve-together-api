import { Test, TestingModule } from '@nestjs/testing';
import { WardrobeService } from './wardrobe.service';

describe('WardrobeService', () => {
  let service: WardrobeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WardrobeService],
    }).compile();

    service = module.get<WardrobeService>(WardrobeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
