import { Injectable } from '@angular/core';
import { SayHelloService } from './say-hello.service';

@Injectable({
  providedIn: 'root'
})
export class Client02SayHelloService extends SayHelloService {

  constructor() {
    super();
  }

  sayHello(text: string): boolean {
    console.log(`*** ${text} ***`);
    return false;
  }
}
