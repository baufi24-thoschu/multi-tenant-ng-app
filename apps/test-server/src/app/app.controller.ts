import { Controller, Get, Req } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getData(@Req() request: Request): any {
    const tenant: string = this.appService.getId(request);
    console.dir(tenant);

    const token: string = this.appService.getToken(request);
    console.dir(token);

    return this.appService.getData();
  }
}
