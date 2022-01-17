import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConducteurViewComponent } from './conducteur-view.component';

describe('ConducteurViewComponent', () => {
  let component: ConducteurViewComponent;
  let fixture: ComponentFixture<ConducteurViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConducteurViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConducteurViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
