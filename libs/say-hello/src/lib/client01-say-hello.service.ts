import { Injectable } from '@angular/core';
import { SayHelloService } from './say-hello.service';

@Injectable({
  providedIn: 'root'
})
export class Client01SayHelloService extends SayHelloService {

  constructor() {
    super();
  }

  public login(username: string, password: string): boolean {
    console.log('### 01 ###');
    return true;
  }
}
