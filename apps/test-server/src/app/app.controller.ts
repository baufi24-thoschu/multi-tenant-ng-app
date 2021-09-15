import { Controller, Get, Req } from '@nestjs/common';

import { TenantEnum } from '@multi-tenant-ng-app/tenant';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getData(@Req() request: Request): any {
    this.appService.getConfig(request);
    return this.appService.getData();
  }
}
