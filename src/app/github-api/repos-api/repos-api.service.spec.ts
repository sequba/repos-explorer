import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ReposApiService } from './repos-api.service';

describe('ReposApiService', () => {
  let service: ReposApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(ReposApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // tests
});
