import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitCardComponent } from './circuit-card.component';

describe('CircuitCardComponent', () => {
  let component: CircuitCardComponent;
  let fixture: ComponentFixture<CircuitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
