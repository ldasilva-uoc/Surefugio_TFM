import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupParticularComponent } from './signup-particular.component';

describe('SignupParticularComponent', () => {
  let component: SignupParticularComponent;
  let fixture: ComponentFixture<SignupParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
