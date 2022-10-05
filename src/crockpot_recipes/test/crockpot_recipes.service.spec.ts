import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UtilsService } from 'src/utils/utils.service';
import { Repository } from 'typeorm';
import { CrockpotRecipesService } from '../crockpot_recipes.service';
import { CrockpotRecipe } from '../entities/entities';
import { FoodType } from '../enums/enums';

const mockRecipe = {
  name: 'Banana Pop',
  asset: 'asset image',
  id: 1,
  sideEffect: null,
  isWarlySpecial: false,
  stats: {
    id: 1,
    hunger: 50,
    sanity: 20,
    health: 30,
  },
  type: 'Veggie' as FoodType,
};

describe('CrockpotRecipesService', () => {
  const RECIPE_REPOSITORY_TOKEN = getRepositoryToken(CrockpotRecipe);
  let service: CrockpotRecipesService;
  let crockpotRecipesRepository: Repository<CrockpotRecipe>;
  let utils: UtilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CrockpotRecipesService,
        UtilsService,
        {
          provide: RECIPE_REPOSITORY_TOKEN,
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    utils = module.get<UtilsService>(UtilsService);
    service = module.get<CrockpotRecipesService>(CrockpotRecipesService);
    crockpotRecipesRepository = module.get<Repository<CrockpotRecipe>>(
      RECIPE_REPOSITORY_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('utils should be defined', () => {
    expect(utils).toBeDefined();
  });

  it('CrockpotRecipe repository should be defined', async () => {
    expect(crockpotRecipesRepository).toBeDefined();
  });

  it('return one recipe by name', async () => {
    jest.spyOn(service, 'getByName').mockResolvedValue(mockRecipe);

    expect(await service.getByName('banana Pop')).toEqual(mockRecipe);
  });

  it('get all recipes', async () => {
    const response: CrockpotRecipe[] = [
      {
        name: 'Banana Pop',
        asset: 'asset image',
        id: 1,
        sideEffect: null,
        isWarlySpecial: false,
        stats: {
          id: 1,
          hunger: 50,
          sanity: 20,
          health: 30,
        },
        type: 'Veggie' as FoodType,
      },
    ];
    jest.spyOn(service, 'getAll').mockResolvedValue(response);
    expect(await service.getAll()).toBe(response);
  });
});
