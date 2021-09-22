import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DomModule } from '@multi-tenant-ng-app/dom';

import { TenantInterceptor } from './tenant.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, DomModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TenantInterceptor,
      multi: true
    }
  ]
})
export class TenantModule {}
