import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";

import { TenantEnum } from './tenant.enum';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private readonly hostname: string;

  constructor() {
    this.hostname = location.hostname;
  }

  protected getTenantForHostname(hostname: string): string {
    const hostnameDivided : Array<string> = hostname.split('.');
    const domain: string = hostnameDivided[0];

    return this.getTenantForHost(domain);
  }

  protected getTenantForString(domain: string): string {
    const tenantEnumValueArray: Array<string> = Object.values(TenantEnum);

    return tenantEnumValueArray.includes(domain) ? domain : 'default';
  }

  protected getTenantForHost(host: string): string {
    return this.getTenantForString(host);
  }

  public getTenant(): string {
    return this.getTenantForHostname(this.hostname);
  }

  public addTenantToHeaders(headers: HttpHeaders): HttpHeaders {
    const headerName = 'x-tenant-id';
    return headers.append(headerName, this.getTenant());
  }
}
