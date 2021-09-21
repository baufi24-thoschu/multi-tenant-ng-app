import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakInstance, KeycloakTokenParsed } from 'keycloak-js';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  private readonly idTokenParsed: KeycloakTokenParsed | any;

  constructor(private readonly keycloakService: KeycloakService) {
    const keycloakInstance: KeycloakInstance = keycloakService.getKeycloakInstance();

    this.idTokenParsed = keycloakInstance.idTokenParsed;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headerName = 'x-tenant-construction_config';
    const construction_config: string = this.idTokenParsed.construction_config;
    const headers: HttpHeaders = request.headers.append(headerName, construction_config);

    request = request.clone({
      headers
    });

    return next.handle(request);
  }
}
