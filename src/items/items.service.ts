import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/entities';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  async create(item: Item) {
    return this.itemRepository.save(item);
  }

  async getAll() {
    return this.itemRepository.find();
  }
}
