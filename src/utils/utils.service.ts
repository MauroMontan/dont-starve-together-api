import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  capitalize(phrase: string): string {

    if (phrase.length !== 0) {
      const words = phrase.split(' ');

      const capWords: string[] = words.map((word) => {
        const capWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

        if (phrase.length > 1) {
          return capWord + ' ';
        } else {
          return capWord;
        }
      });

      return String()
        .concat(...capWords)
        .trim();
    }
  }
}
