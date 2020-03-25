import { TestBed } from '@angular/core/testing';

import { ReposApiService } from './repos-api.service';

describe('ReposApiService', () => {
  let service: ReposApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
