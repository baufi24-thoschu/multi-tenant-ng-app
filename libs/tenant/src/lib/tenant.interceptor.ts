import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TenantService } from './tenant.service';

@Injectable()
export class TenantInterceptor implements HttpInterceptor {

  constructor(private readonly tenantService: TenantService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = this.tenantService.addTenantToHeaders(request.headers);

    request = request.clone({
      headers: headers
    });

    return next.handle(request);
  }
}
