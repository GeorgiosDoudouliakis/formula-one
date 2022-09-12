import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversConstructorsComponent } from './drivers-constructors.component';

describe('DriversConstructorsComponent', () => {
  let component: DriversConstructorsComponent;
  let fixture: ComponentFixture<DriversConstructorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversConstructorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversConstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
