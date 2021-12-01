import { TestBed } from '@angular/core/testing';

import { ProfileProtectoraService } from './profile-protectora.service';

describe('ProfileProtectoraService', () => {
  let service: ProfileProtectoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileProtectoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
