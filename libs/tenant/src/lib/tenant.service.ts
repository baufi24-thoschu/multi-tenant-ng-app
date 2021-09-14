import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";

import { TenantEnum } from './tenant.enum';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private readonly hostname: string;

  constructor() {
    this.hostname = window.location.hostname;
  }

  protected getTenantForHostname(hostname: string): string {
    const hostnameDivided : Array<string> = hostname.split('.');
    const domain: string = hostnameDivided[0];

    return this.getTenantForHost(domain);
  }

  protected getTenantForString(domain: string): string {
    for (const e in TenantEnum) {
      if (e.toLowerCase() === domain.toLowerCase()) {
        // @ts-ignore
        return TenantEnum[e];
      }
    }

    return '';
  }

  protected getTenantForHost(host: string): string {
    return this.getTenantForString(host);
  }

  public getTenant(): string {
    return this.getTenantForHostname(this.hostname);
  }

  public addTenantToHeaders(headers: HttpHeaders): HttpHeaders {
    return headers.append("x-tenant-id", this.getTenant());
  }
}
