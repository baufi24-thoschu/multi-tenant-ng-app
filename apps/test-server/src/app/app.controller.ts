import { Controller, Get, Req } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getData(@Req() request: Request): any {
    const tenant: string = this.appService.getId(request);
    console.dir(tenant);

    const construction_config: string = this.appService.getConfig(request);
    const construction_config_object: JSON = JSON.parse(construction_config);
    console.dir(construction_config_object);

    return this.appService.getData();
  }
}
