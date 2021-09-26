import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakInstance, KeycloakTokenParsed } from 'keycloak-js';

@Injectable()
export class IamInterceptor implements HttpInterceptor {
  private static readonly tokenName = 'x-tenant-token';
  private readonly keycloakInstance: KeycloakInstance;

  constructor(private readonly keycloakService: KeycloakService) {
    this.keycloakInstance = keycloakService.getKeycloakInstance();

    console.log(this.keycloakInstance.tokenParsed);
    console.log(this.keycloakInstance.token);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // @ts-ignore
    const headers: HttpHeaders = request.headers.append(IamInterceptor.tokenName, this.keycloakInstance?.token);

    request = request.clone({
      headers
    });

    return next.handle(request);
  }
}
