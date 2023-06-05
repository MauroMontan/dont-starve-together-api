import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UtilsService } from 'src/utils/utils.service';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dtos/dtos';
import { Item } from './entities/entities';

@Injectable()
export class ItemsService {
  constructor(
    private utils: UtilsService,
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  async create(item: CreateItemDto): Promise<Item> {
    return this.itemRepository.save(item);
  }

  async getAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async getByName(name: string): Promise<Item | HttpException> {
    try {
      name = this.utils.capitalize(name);

      return await this.itemRepository.findOneByOrFail({ name });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Item not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
