import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleCComponent } from './salle-c.component';

describe('SalleCComponent', () => {
  let component: SalleCComponent;
  let fixture: ComponentFixture<SalleCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
