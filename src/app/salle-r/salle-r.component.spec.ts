import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleRComponent } from './salle-r.component';

describe('SalleRComponent', () => {
  let component: SalleRComponent;
  let fixture: ComponentFixture<SalleRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
