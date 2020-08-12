import { TestBed } from '@angular/core/testing';

import { CategoryimageService } from './categoryimage.service';

describe('CategoryimageService', () => {
  let service: CategoryimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
