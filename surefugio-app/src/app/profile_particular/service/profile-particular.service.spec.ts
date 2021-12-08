import { TestBed } from '@angular/core/testing';

import { ProfileParticularService } from './profile-particular.service';

describe('ProfileParticularService', () => {
  let service: ProfileParticularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileParticularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
