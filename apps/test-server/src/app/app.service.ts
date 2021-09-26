import { Injectable } from '@nestjs/common';
import { path } from 'ramda';

@Injectable()
export class AppService {
  private readonly text: string;

  constructor() {
    this.text = 'Welcome to test-server!';
  }

  public getData(): { message: string } {
    return { message: this.text };
  }

  public getId(request: Request): string {
    const tenant_id_path = 'x-tenant-id';
    const tenant_id: string = this.extractHeaderValue(request, tenant_id_path);

    return tenant_id;
  }

  public getToken(request: Request): string {
    const tenant_token_path = 'x-tenant-token';
    const tenant_token: string = this.extractHeaderValue(request, tenant_token_path);

    return tenant_token;
  }

  private extractHeaderValue(request: Request, header: string): string {
    const headers: Headers = request.headers;
    const headerValue: string = path([header], headers);

    console.log('************');

    return headerValue;
  }
}
