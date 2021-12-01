import { TestBed } from '@angular/core/testing';

import { ProtectorasService } from './protectoras.service';

describe('ProtectorasService', () => {
  let service: ProtectorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtectorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
