import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverConstructorCardComponent } from './driver-constructor-card.component';

describe('DriverConstructorCardComponent', () => {
  let component: DriverConstructorCardComponent;
  let fixture: ComponentFixture<DriverConstructorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverConstructorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverConstructorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
