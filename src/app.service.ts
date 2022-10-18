import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      author: 'MauroMontan',
      About: 'Yeah, im working on a client app :p, go to "/docs" to see more. ',
    };
  }
}
