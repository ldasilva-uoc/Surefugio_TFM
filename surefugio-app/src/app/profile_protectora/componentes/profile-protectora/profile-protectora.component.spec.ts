import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProtectoraComponent } from './profile-protectora.component';

describe('ProfileProtectoraComponent', () => {
  let component: ProfileProtectoraComponent;
  let fixture: ComponentFixture<ProfileProtectoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileProtectoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileProtectoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
