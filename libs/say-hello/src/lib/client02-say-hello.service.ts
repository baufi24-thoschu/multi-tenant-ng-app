import { Injectable } from '@angular/core';
import { SayHelloService } from './say-hello.service';

@Injectable({
  providedIn: 'root'
})
export class Client02SayHelloService extends SayHelloService {

  constructor() {
    super();
  }

  login(username: string, password: string): boolean {
    console.log('### 02 ###');
    return false;
  }
}
