import { TestBed, inject } from '@angular/core/testing';

import { SettersgrttresService } from './settersgrttres.service';

describe('SettersgrttresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettersgrttresService]
    });
  });

  it('should be created', inject([SettersgrttresService], (service: SettersgrttresService) => {
    expect(service).toBeTruthy();
  }));
});
