import { TestBed } from '@angular/core/testing';

import { Client02SayHelloService } from './client02-say-hello.service';

describe('Client02SayHelloService', () => {
  let service: Client02SayHelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Client02SayHelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
