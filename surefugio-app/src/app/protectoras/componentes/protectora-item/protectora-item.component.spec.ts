import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectoraItemComponent } from './protectora-item.component';

describe('ProtectoraItemComponent', () => {
  let component: ProtectoraItemComponent;
  let fixture: ComponentFixture<ProtectoraItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectoraItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectoraItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
