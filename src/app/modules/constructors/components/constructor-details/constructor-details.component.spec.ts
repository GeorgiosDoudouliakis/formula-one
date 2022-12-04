import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorDetailsComponent } from './constructor-details.component';

describe('ConstructorDetailsComponent', () => {
  let component: ConstructorDetailsComponent;
  let fixture: ComponentFixture<ConstructorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
