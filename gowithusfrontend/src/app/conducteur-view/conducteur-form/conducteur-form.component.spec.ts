import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConducteurFormComponent } from './conducteur-form.component';

describe('ConducteurFormComponent', () => {
  let component: ConducteurFormComponent;
  let fixture: ComponentFixture<ConducteurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConducteurFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConducteurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
