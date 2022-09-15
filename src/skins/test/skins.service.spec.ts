import { Test, TestingModule } from '@nestjs/testing';
import { SkinsService } from './skins.service';

describe('WardrobeService', () => {
  let service: SkinsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkinsService],
    }).compile();

    service = module.get<SkinsService>(SkinsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
