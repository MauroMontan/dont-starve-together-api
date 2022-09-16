import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CrockpotRecipe } from 'src/crockpot_recipes/entities/entities';
import { Item } from 'src/items/entities/item.entity';
import { UtilsService } from 'src/utils/utils.service';
import { Repository } from 'typeorm';
import { Backstory, Survivor, SurvivorStats } from '../entities/entities';
import { SurvivorsService } from '../survivors.service';

// Survivor response mock
const mockResponse: Survivor = {
  name: 'Wendy',
  animatedShort: 'link',
  backstory: {} as Backstory,
  birthDate: '11/11',
  description: 'cool character',
  entersTheConstantWith: [] as Item[],
  favouriteFood: {} as CrockpotRecipe,
  nickname: 'wn',
  perks: [],
  quote: 'quote',
  skins: [],
  stats: {} as SurvivorStats,
  id: 1,
};

describe('SurvivorsService', () => {
  const SURVIVOR_TOKEN = getRepositoryToken(Survivor);
  let service: SurvivorsService;
  let utils: UtilsService;
  let survivorRepository: Repository<Survivor>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SurvivorsService,
        UtilsService,
        {
          provide: SURVIVOR_TOKEN,
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
            finOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SurvivorsService>(SurvivorsService);
    utils = module.get<UtilsService>(UtilsService);
    survivorRepository = module.get<Repository<Survivor>>(SURVIVOR_TOKEN);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('survivor token should be defined', () => {
    expect(survivorRepository).toBeDefined();
  });

  it('utils service should be defined', () => {
    expect(utils).toBeDefined();
  });

  it('create survivor should return Survivor instance', async () => {
    jest.spyOn(service, 'create').mockResolvedValue(mockResponse);

    expect(await service.create(mockResponse)).toBe(mockResponse);
  });

  it('should return one survivor by giving the name', async () => {
    jest.spyOn(service, 'getOne').mockResolvedValue(mockResponse);

    expect(await service.getOne('Wendy')).toBe(mockResponse);
  });
  it('should return a list of survivors', async () => {
    jest.spyOn(service, 'getAll').mockResolvedValue([mockResponse]);

    expect(await service.getAll()).toBeInstanceOf(Array);
    expect(await service.getAll()).toEqual([mockResponse]);
  });

  it('should return error to create new survivor', async () => {
    jest
      .spyOn(service, 'create')
      .mockResolvedValue(
        new HttpException({}, HttpStatus.UNPROCESSABLE_ENTITY),
      );

    expect(await service.create(mockResponse)).toBeInstanceOf(HttpException);
  });
});
