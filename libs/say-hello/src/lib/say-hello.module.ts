import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantService } from '@multi-tenant-ng-app/tenant';

import { SayHelloService, getSayHelloService } from './say-hello.service';
import { Client01SayHelloService } from './client01-say-hello.service';
import { Client02SayHelloService } from './client02-say-hello.service';
import { Client03SayHelloService } from './client03-say-hello.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: SayHelloService,
      useFactory: getSayHelloService,
      deps: [TenantService, Client01SayHelloService, Client02SayHelloService, Client03SayHelloService]
    }
  ]
})
export class SayHelloModule {}
