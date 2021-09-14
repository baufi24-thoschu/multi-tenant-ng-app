import { Controller, Get, Req } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Req() request: Request) {
    this.appService.logRequest(request);
    return this.appService.getData();
  }
}
