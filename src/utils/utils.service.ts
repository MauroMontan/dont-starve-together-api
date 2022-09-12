import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  capitalize(word: string): string {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
