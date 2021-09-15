import { TenantEnum, TenantService } from '@multi-tenant-ng-app/tenant';

import { Client01SayHelloService } from './client01-say-hello.service';
import { Client02SayHelloService } from './client02-say-hello.service';

export function getSayHelloService(tenantService: TenantService, client01SayHelloService: Client01SayHelloService, client02SayHelloService: Client02SayHelloService): SayHelloService {
  let clientSayHelloService: SayHelloService;

  switch(tenantService.getTenant()) {
    case TenantEnum.CLIENT01:
      clientSayHelloService = client01SayHelloService;
      break;
    case TenantEnum.CLIENT02:
      clientSayHelloService = client02SayHelloService;
      break;
    default:
      throw new Error('Unknown tenant for say-hello service');
  }

  return clientSayHelloService;
}

export abstract class SayHelloService extends Object {
  protected constructor() {
    super();
  }

  public abstract sayHello(text: string): boolean;
}
