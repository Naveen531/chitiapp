import { TestBed, inject } from '@angular/core/testing';

import { PojoService } from './pojo.service';

describe('PojoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PojoService]
    });
  });

  it('should be created', inject([PojoService], (service: PojoService) => {
    expect(service).toBeTruthy();
  }));
});
