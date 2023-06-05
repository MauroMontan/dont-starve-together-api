import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Redirect('https://dstclient-1-w0962473.deta.app')
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
