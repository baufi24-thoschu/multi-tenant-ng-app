import { Injectable } from '@angular/core';
import { SayHelloService } from './say-hello.service';

@Injectable({
  providedIn: 'root'
})
export class Client01SayHelloService extends SayHelloService {

  constructor() {
    super();
  }

  sayHello(text: string): boolean {
    console.log(`### ${text} ###`);
    return true;
  }
}
