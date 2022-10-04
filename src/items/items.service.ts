import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dtos/dtos';
import { Item } from './entities/entities';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) { }

  async create(item: CreateItemDto) {
    return this.itemRepository.save(item);
  }

  async getAll() {
    return this.itemRepository.find();
  }

  async getByName(name: string) {
    return this.itemRepository.findOne({ where: { name } });
  }
}
