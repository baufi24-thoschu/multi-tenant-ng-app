import { TestBed } from '@angular/core/testing';

import { Client01SayHelloService } from './client01-say-hello.service';

describe('Client01SayHelloService', () => {
  let service: Client01SayHelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Client01SayHelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
