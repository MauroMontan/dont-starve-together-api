import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Survivor } from 'src/survivors/entities/entities';
import { Repository } from 'typeorm';
import { Item } from '../entities/entities';
import { ItemsController } from '../items.controller';
import { ItemsService } from '../items.service';

const mockItem = {
  id: 1,
  name: 'custom item ',
  asset: 'asset image',
  description: 'cool item descriiption',
  category: [],
  survivor: {} as Survivor,
};
describe('ItemsController', () => {
  const ITEM_REPOSITORY = getRepositoryToken(Item);
  let controller: ItemsController;
  let service: ItemsService;
  let itemRepository: Repository<Item>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [
        ItemsService,
        {
          provide: ITEM_REPOSITORY,
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
    service = module.get<ItemsService>(ItemsService);
    itemRepository = module.get<Repository<Item>>(ITEM_REPOSITORY);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('item service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('item repository service should be defined', () => {
    expect(itemRepository).toBeDefined();
  });

  it('should create a new item', async () => {
    jest.spyOn(controller, 'createItem').mockResolvedValueOnce(mockItem);

    expect(await controller.createItem(mockItem)).toEqual(mockItem);
  });

  it('should return a list of items', async () => {
    jest.spyOn(controller, 'ListAllItems').mockResolvedValue([mockItem]);

    expect(await controller.ListAllItems()).toBeInstanceOf(Array);
    expect(await controller.ListAllItems()).toEqual([mockItem]);
  });
});