import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakInstance, KeycloakTokenParsed } from 'keycloak-js';

@Injectable()
export class IamInterceptor implements HttpInterceptor {
  private static default_construction_config: Record<'req' | 'app_id' | 'ux_version' | 'css_version' | 'lang' | 'mod', any> = {
    req: null,
    app_id: null,
    ux_version: null,
    css_version: null,
    lang: null,
    mod: {
      mgt_calc: {
        version: null
      },
      mgt_budget_calc: {
        version: null
      },
      mgt_interests_chart: {
        version: null
      },
      immo_shopping: {
        version: null
      },
      immo_rate: {
        version: null
      }
    }
  };
  private readonly idTokenParsed: KeycloakTokenParsed | any;

  constructor(private readonly keycloakService: KeycloakService) {
    const keycloakInstance: KeycloakInstance = keycloakService.getKeycloakInstance();

    this.idTokenParsed = keycloakInstance.idTokenParsed;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headerName = 'x-tenant-construction_config';
    const construction_config: string = this.idTokenParsed.construction_config ? this.idTokenParsed.construction_config : JSON.stringify(IamInterceptor.default_construction_config);
    const headers: HttpHeaders = request.headers.append(headerName, construction_config);

    request = request.clone({
      headers
    });

    return next.handle(request);
  }
}
