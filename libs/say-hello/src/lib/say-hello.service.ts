import { Injectable } from '@angular/core';

import { Tenant, TenantService } from '@multi-tenant-ng-app/tenant';

import { Client01SayHelloService } from './client01-say-hello.service';
import { Client02SayHelloService } from './client02-say-hello.service';

export function getLoginService(tenantService: TenantService, client1LoginService: Client01SayHelloService, client2loginService: Client02SayHelloService): SayHelloService {
  if (tenantService.getTenant() === Tenant.CLIENT01) {
    return client1LoginService;
  } else if (tenantService.getTenant() === Tenant.CLIENT02) {
    return client2loginService;
  }

  throw new Error("Unknown tenant for login service");
}

// @Injectable({
//   providedIn: 'root'
// })
export abstract class SayHelloService {
  protected constructor() { }
  public abstract login(username: string, password: string): boolean;
}
