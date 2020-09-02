import { TestBed } from '@angular/core/testing';

import { TypePartService } from './type-part.service';

describe('TypePartService', () => {
  let service: TypePartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypePartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
