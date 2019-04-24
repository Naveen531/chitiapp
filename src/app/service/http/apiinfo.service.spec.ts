import { TestBed, inject } from '@angular/core/testing';

import { ApiinfoService } from './apiinfo.service';

describe('ApiinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiinfoService]
    });
  });

  it('should be created', inject([ApiinfoService], (service: ApiinfoService) => {
    expect(service).toBeTruthy();
  }));
});
