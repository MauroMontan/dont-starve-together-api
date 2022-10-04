import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Survivor } from 'src/survivors/entities/entities';
import { Item } from '../entities/entities';
import { ItemsService } from '../items.service';

const mockItem = {
  id: 1,
  name: 'custom item',
  asset: 'asset image',
  description: 'cool item descriiption',
  category: [],
  survivor: {} as Survivor,
};

describe('ItemsService', () => {
  const ITEM_TOKEN = getRepositoryToken(Item);
  let service: ItemsService;
  let itemRepository: Repository<Item>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: ITEM_TOKEN,
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
    itemRepository = module.get<Repository<Item>>(ITEM_TOKEN);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('item repository should be defined', () => {
    expect(itemRepository).toBeDefined();
  });

  it('should create a new item', async () => {
    jest.spyOn(service, 'create').mockResolvedValueOnce(mockItem);

    expect(await service.create(mockItem)).toEqual(mockItem);
  });

  it('should return an item by name', async () => {
    jest.spyOn(service, 'getByName').mockResolvedValueOnce(mockItem);

    expect(await service.getByName('custom item')).toEqual(mockItem);
  });

  it('should return a item with a given name', async () => {
    jest.spyOn(service, 'getByName').mockResolvedValueOnce(mockItem);

    expect(await service.getByName('custom item')).toEqual(mockItem);
  });

  it('should return a list of all items', async () => {
    jest.spyOn(service, 'getAll').mockResolvedValue([mockItem]);

    expect(await service.getAll()).toBeInstanceOf(Array);
    expect(await service.getAll()).toEqual([mockItem]);
  });
});
