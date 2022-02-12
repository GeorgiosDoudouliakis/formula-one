import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitLocationComponent } from './circuit-location.component';

describe('CircuitLocationComponent', () => {
  let component: CircuitLocationComponent;
  let fixture: ComponentFixture<CircuitLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
