import { TestBed } from '@angular/core/testing';

import { Client03SayHelloService } from './client03-say-hello.service';

describe('Client03SayHelloService', () => {
  let service: Client03SayHelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Client03SayHelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
