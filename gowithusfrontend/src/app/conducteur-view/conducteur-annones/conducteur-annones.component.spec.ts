import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConducteurAnnonesComponent } from './conducteur-annones.component';

describe('ConducteurAnnonesComponent', () => {
  let component: ConducteurAnnonesComponent;
  let fixture: ComponentFixture<ConducteurAnnonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConducteurAnnonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConducteurAnnonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
