import { Test, TestingModule } from '@nestjs/testing';
import { UtilsService } from '../utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilsService],
    }).compile();

    service = module.get<UtilsService>(UtilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('shoud capitalize any given word', () => {
    expect(service.capitalize('wEndY')).toBe('Wendy');
  });
});
