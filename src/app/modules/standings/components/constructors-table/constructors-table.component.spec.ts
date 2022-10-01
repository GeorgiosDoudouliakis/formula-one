import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorsTableComponent } from './constructors-table.component';

describe('ConstructorsTableComponent', () => {
  let component: ConstructorsTableComponent;
  let fixture: ComponentFixture<ConstructorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructorsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
