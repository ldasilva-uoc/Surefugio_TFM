import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectoraListComponent } from './protectora-list.component';

describe('ProtectoraListComponent', () => {
  let component: ProtectoraListComponent;
  let fixture: ComponentFixture<ProtectoraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectoraListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectoraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
