import { Test, TestingModule } from '@nestjs/testing';
import { SurvivorsService } from '../survivors.service';
import { SurvivorsController } from '../survivors.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Backstory, Survivor, SurvivorStats } from '../entities/entities';
import { UtilsService } from 'src/utils/utils.service';
import { Item } from 'src/items/entities/entities';
import { CrockpotRecipe } from 'src/crockpot_recipes/entities/entities';

const mockSurvivor = {
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

describe('SurvivorsController', () => {
  let controller: SurvivorsController;
  let service: SurvivorsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurvivorsController],
      providers: [
        SurvivorsService,
        UtilsService,
        {
          provide: getRepositoryToken(Survivor),
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<SurvivorsController>(SurvivorsController);
    service = module.get<SurvivorsService>(SurvivorsService);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('survivor service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a new value survivor', async () => {
    jest
      .spyOn(controller, 'createSurvivor')
      .mockResolvedValueOnce(mockSurvivor);
    expect(await controller.createSurvivor(mockSurvivor)).toEqual(mockSurvivor);
  });

  it('should return a list of survivors', async () => {
    jest
      .spyOn(controller, 'listAllSurvivors')
      .mockResolvedValue([mockSurvivor]);

    expect(await controller.listAllSurvivors()).toBeInstanceOf(Array);
    expect(await controller.listAllSurvivors()).toEqual([mockSurvivor]);
  });

  it('should return a survivor by name', async () => {
    jest
      .spyOn(controller, 'getOneSurvivor')
      .mockResolvedValueOnce(mockSurvivor);

    expect(await controller.getOneSurvivor('wEnDy')).toEqual(mockSurvivor);
  });
});
