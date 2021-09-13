import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TenantService } from './tenant.service';
import { TenantInterceptor } from './tenant.interceptor';
import { Tenant } from './tenant.enum';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TenantInterceptor,
      multi: true
    },
    TenantService
  ],
  exports: [
    Tenant as any
  ]
})
export class TenantModule {}
