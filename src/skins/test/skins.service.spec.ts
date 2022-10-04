import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Survivor } from 'src/survivors/entities/entities';
import { UtilsService } from 'src/utils/utils.service';
import { Repository } from 'typeorm';
import { Skin } from '../entities/entities';
import { Collection } from '../enums/enums';
import { SkinsService } from '../skins.service';

const mockSkin = {
  id: 1,
  name: 'skin name',
  description: 'cool  object description',
  bigportrait: 'bigportrait link',
  collection: '' as Collection,
  survivorId: 1,
  survivor: {} as Survivor,
};

describe('WardrobeService', () => {
  const SKIN_TOKEN = getRepositoryToken(Skin);
  let service: SkinsService;
  let skinRepository: Repository<Skin>;
  let utils: UtilsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SkinsService,
        UtilsService,
        {
          provide: SKIN_TOKEN,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<SkinsService>(SkinsService);
    skinRepository = module.get<Repository<Skin>>(SKIN_TOKEN);
    utils = module.get<UtilsService>(UtilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('utils should be defined', () => {
    expect(utils).toBeDefined();
  });

  it('Skins repository should be defined', () => {
    expect(skinRepository).toBeDefined();
  });

  it('should return a skin', async () => {
    jest.spyOn(service, 'getByName').mockResolvedValue(mockSkin);
    expect(await service.getByName('skin name')).toEqual(mockSkin);
  });

  it('should return a list of all skins', async () => {
    jest.spyOn(service, 'getAll').mockResolvedValue([mockSkin]);
    expect(await service.getAll()).toBeInstanceOf(Array);
    expect(await service.getAll()).toEqual([mockSkin]);
  });
});
