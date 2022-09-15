import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrockpotRecipesService } from '../crockpot_recipes.service';
import { CrockpotRecipe } from '../entities/entities';
import { FoodType } from '../enums/enums';

describe('CrockpotRecipesService', () => {
  const RECIPE_REPOSITORY_TOKEN = getRepositoryToken(CrockpotRecipe);
  let service: CrockpotRecipesService;
  let crockpotRecipesRepository: Repository<CrockpotRecipe>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CrockpotRecipesService,
        {
          provide: RECIPE_REPOSITORY_TOKEN,
          useValue: {
            cretate: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CrockpotRecipesService>(CrockpotRecipesService);
    crockpotRecipesRepository = module.get<Repository<CrockpotRecipe>>(
      RECIPE_REPOSITORY_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('CrockpotRecipe repository should be defined', async () => {
    expect(crockpotRecipesRepository).toBeDefined();
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
