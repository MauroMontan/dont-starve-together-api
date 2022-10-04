import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Survivor } from 'src/survivors/entities/entities';
import { UtilsService } from 'src/utils/utils.service';
import { Skin } from '../entities/skin.entity';
import { Collection } from '../enums/enums';
import { SkinsController } from '../skins.controller';
import { SkinsService } from '../skins.service';

const mockSkin = {
  id: 1,
  name: 'skin name',
  description: 'cool  object description',
  bigportrait: 'bigportrait link',
  survivorId: 1,
  collection: '' as Collection,
  survivor: {} as Survivor,
};

describe('SkinsController', () => {
  const SKIN_TOKEN = getRepositoryToken(Skin);
  let controller: SkinsController;
  let service: SkinsService;
  let utils: UtilsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkinsController],
      providers: [
        SkinsService,
        UtilsService,
        {
          provide: SKIN_TOKEN,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<SkinsController>(SkinsController);
    service = module.get<SkinsService>(SkinsService);
    utils = module.get<UtilsService>(UtilsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('utils should be defined', () => {
    expect(utils).toBeDefined();
  });

  it('skin service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new skin', async () => {
    jest.spyOn(service, 'create').mockResolvedValue(mockSkin);
    expect(await service.create(mockSkin)).toEqual(mockSkin);
  });

  it('should return a list of skins', async () => {
    jest.spyOn(controller, 'getSkins').mockResolvedValue([mockSkin]);

    expect(await controller.getSkins()).toBeInstanceOf(Array);
    expect(await controller.getSkins()).toEqual([mockSkin]);
  });
});
