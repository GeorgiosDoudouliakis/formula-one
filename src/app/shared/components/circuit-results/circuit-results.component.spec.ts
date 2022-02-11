import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitResultsComponent } from './circuit-results.component';

describe('CircuitResultsComponent', () => {
  let component: CircuitResultsComponent;
  let fixture: ComponentFixture<CircuitResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
