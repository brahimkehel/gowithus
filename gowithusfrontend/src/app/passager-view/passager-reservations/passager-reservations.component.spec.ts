import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagerReservationsComponent } from './passager-reservations.component';

describe('PassagerReservationsComponent', () => {
  let component: PassagerReservationsComponent;
  let fixture: ComponentFixture<PassagerReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassagerReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagerReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
