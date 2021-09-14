import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly text: string;

  constructor() {
    this.text = 'Welcome to test-server!';
  }

  public getData(): { message: string } {
    return { message: this.text };
  }

  public getConfig(request: Request): void {
    console.log(request.headers['x-tenant-id']);
  }
}
