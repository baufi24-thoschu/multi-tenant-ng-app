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

  public getConfig(request: Request): string {
    const construction_config_path = 'x-tenant-construction_config';
    const construction_config: string = this.extractHeaderValue(request, construction_config_path);

    console.log('##########');

    return construction_config;
  }

  private extractHeaderValue(request: Request, header: string): string {
    const headers: Headers = request.headers;
    const headerValue: string = path([header], headers);

    console.log('************');

    return headerValue;
  }
}
