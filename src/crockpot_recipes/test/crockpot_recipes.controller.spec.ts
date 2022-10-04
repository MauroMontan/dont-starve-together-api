import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UtilsService } from 'src/utils/utils.service';
import { Repository } from 'typeorm';
import { CrockpotRecipesController } from '../crockpot_recipes.controller';
import { CrockpotRecipesService } from '../crockpot_recipes.service';
import { CrockpotRecipe } from '../entities/entities';
import { FoodType } from '../enums/enums';

const mockCrockpotRecipe = {
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

describe('CrockpotRecipesController', () => {
  const RECIPE_TOKEN = getRepositoryToken(CrockpotRecipe);
  let controller: CrockpotRecipesController;
  let service: CrockpotRecipesService;
  let crockpotRecipesRepository: Repository<CrockpotRecipe>;
  let utils: UtilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrockpotRecipesController],
      providers: [
        CrockpotRecipesService,
        UtilsService,
        {
          provide: RECIPE_TOKEN,
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    utils = module.get<UtilsService>(UtilsService);
    controller = module.get<CrockpotRecipesController>(
      CrockpotRecipesController,
    );
    service = module.get<CrockpotRecipesService>(CrockpotRecipesService);
    crockpotRecipesRepository =
      module.get<Repository<CrockpotRecipe>>(RECIPE_TOKEN);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('utiils should be defined', () => {
    expect(utils).toBeDefined();
  });

  it('crockpot recipe service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('crockpot repository should be defined', () => {
    expect(crockpotRecipesRepository).toBeDefined();
  });

  it('should create a new crockpot recipe', async () => {
    jest
      .spyOn(controller, 'createCrockpotRecipe')
      .mockResolvedValueOnce(mockCrockpotRecipe);

    expect(await controller.createCrockpotRecipe(mockCrockpotRecipe)).toEqual(
      mockCrockpotRecipe,
    );
  });

  it('should return a list of crockpot recipes', async () => {
    jest
      .spyOn(controller, 'getRecipes')
      .mockResolvedValue([mockCrockpotRecipe]);

    expect(await controller.getRecipes()).toBeInstanceOf(Array);
    expect(await controller.getRecipes()).toEqual([mockCrockpotRecipe]);
  });
});
