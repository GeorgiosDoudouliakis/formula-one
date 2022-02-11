import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorResultsComponent } from './constructor-results.component';

describe('ConstructorResultsComponent', () => {
  let component: ConstructorResultsComponent;
  let fixture: ComponentFixture<ConstructorResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructorResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
