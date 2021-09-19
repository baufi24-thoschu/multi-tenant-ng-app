import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private readonly keycloakService: KeycloakService) {
    const keycloakInstance = keycloakService.getKeycloakInstance();
    console.log(keycloakInstance);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headerName = 'x-tenant-config';
    const headers = request.headers
    const keycloakInstance = this.keycloakService.getKeycloakInstance();
    const token = keycloakInstance.idTokenParsed;
    headers.append(headerName, '#');
    //
    //
    // request = request.clone({
    //   headers
    // });

    return next.handle(request);
  }
}
