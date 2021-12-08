import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupProtectoraComponent } from './signup-protectora.component';

describe('SignupProtectoraComponent', () => {
  let component: SignupProtectoraComponent;
  let fixture: ComponentFixture<SignupProtectoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupProtectoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupProtectoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
