import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverConstructorComponent } from './driver-constructor.component';

describe('DriverConstructorComponent', () => {
  let component: DriverConstructorComponent;
  let fixture: ComponentFixture<DriverConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
