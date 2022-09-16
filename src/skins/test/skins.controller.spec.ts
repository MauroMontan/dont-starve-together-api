import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Survivor } from 'src/survivors/entities/entities';
import { Skin } from '../entities/skin.entity';
import { Collection } from '../enums/enums';
import { SkinsController } from '../skins.controller';
import { SkinsService } from '../skins.service';

const mockSkin = {
  id: 1,
  name: 'skin name',
  description: 'cool  object description',
  bigportrait: 'bigportrait link',
  collection: '' as Collection,
  survivor: {} as Survivor,
};

describe('SkinsController', () => {
  const SKIN_TOKEN = getRepositoryToken(Skin);
  let controller: SkinsController;
  let service: SkinsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkinsController],
      providers: [
        SkinsService,
        {
          provide: SKIN_TOKEN,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<SkinsController>(SkinsController);
    service = module.get<SkinsService>(SkinsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('skin service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a list of skins', async () => {
    jest.spyOn(controller, 'getAllSkins').mockResolvedValue([mockSkin]);

    expect(await controller.getAllSkins()).toBeInstanceOf(Array);
    expect(await controller.getAllSkins()).toEqual([mockSkin]);
  });
});
