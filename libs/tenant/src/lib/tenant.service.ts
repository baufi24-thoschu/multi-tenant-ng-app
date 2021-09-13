import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";

import { Tenant } from './tenant.enum';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  // constructor() {}

  protected getTenantForHostname(hostname: string): string | null {
    return this.getTenantForHost(hostname.split('.')[0]);
  }

  protected getTenantForString(s: string): string {
    for (const e in Tenant) {
      if (e.toLowerCase() === s.toLowerCase()) {

        // @ts-ignore
        return Tenant[e];
      }
    }

    return '';
  }

  protected getTenantForHost(host: string): string | null {
    return this.getTenantForString(host);
  }

  public getTenant(): string | null {
    return this.getTenantForHostname(window.location.hostname);
  }

  public addTenantToHeaders(headers: HttpHeaders): HttpHeaders {
    return headers.append("X-TenantEnum-ID", this.getTenant() as string);
  }
}
