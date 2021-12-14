import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileParticularComponent } from './profile-particular.component';

describe('ProfileParticularComponent', () => {
  let component: ProfileParticularComponent;
  let fixture: ComponentFixture<ProfileParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
