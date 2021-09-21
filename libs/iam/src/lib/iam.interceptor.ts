import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakInstance, KeycloakTokenParsed } from 'keycloak-js';

@Injectable()
export class IamInterceptor implements HttpInterceptor {
  private static readonly headerName = 'x-tenant-construction_config';
  private readonly idTokenParsed: KeycloakTokenParsed | any;

  constructor(private readonly keycloakService: KeycloakService) {
    const keycloakInstance: KeycloakInstance = keycloakService.getKeycloakInstance();

    this.idTokenParsed = keycloakInstance.idTokenParsed;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers: HttpHeaders = request.headers.append(IamInterceptor.headerName, this.getConstructionConfig());

    request = request.clone({
      headers
    });

    return next.handle(request);
  }

  private getConstructionConfig(): string {
    return this.idTokenParsed.construction_config ?
      this.idTokenParsed.construction_config :
        JSON.stringify({});
  }
}
