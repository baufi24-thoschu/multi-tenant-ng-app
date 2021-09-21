import { TestBed } from '@angular/core/testing';

import { IamInterceptor } from './iam.interceptor';

describe('IamInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IamInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IamInterceptor = TestBed.inject(IamInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
