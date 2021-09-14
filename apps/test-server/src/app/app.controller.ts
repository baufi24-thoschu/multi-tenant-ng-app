import { Controller, Get, Req } from '@nestjs/common';

import { TenantEnum } from '@multi-tenant-ng-app/tenant';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Req() request: Request) {
    this.appService.getConfig(request);
    return this.appService.getData();
  }
}
