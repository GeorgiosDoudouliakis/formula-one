import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorsDriversComponent } from './constructors-drivers.component';

describe('ConstructorsDriversComponent', () => {
  let component: ConstructorsDriversComponent;
  let fixture: ComponentFixture<ConstructorsDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructorsDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorsDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
