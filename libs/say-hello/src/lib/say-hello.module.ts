import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from "@angular/router";

import { TenantEnum, TenantService } from '@multi-tenant-ng-app/tenant';

import { SayHelloService, getSayHelloService } from './say-hello.service';
import { Client01SayHelloService } from './client01-say-hello.service';
import { Client02SayHelloService } from './client02-say-hello.service';
import { Client03SayHelloService } from './client03-say-hello.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ],
  providers: [
    {
      provide: SayHelloService,
      useFactory: getSayHelloService,
      deps: [TenantService, Client01SayHelloService, Client02SayHelloService, Client03SayHelloService]
    }
  ]
})
export class SayHelloModule {
  private appRoutes: Routes = [];

  constructor(private router: Router, private readonly tenantService: TenantService) {
    switch(this.tenantService.getTenant()) {
      case TenantEnum.CLIENT01:
        this.appRoutes = [
          // your routes here
        ];
        break;
      case TenantEnum.CLIENT02:
        this.appRoutes = [
          // your routes here
        ];
        break;
      default:
        this.appRoutes = [
          // your routes here
        ];
    }

    this.appRoutes.forEach(route => this.router.config.unshift(route));
  }
}
