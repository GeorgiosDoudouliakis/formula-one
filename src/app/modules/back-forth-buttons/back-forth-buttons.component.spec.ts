import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackForthButtonsComponent } from './back-forth-buttons.component';

describe('BackForthButtonsComponent', () => {
  let component: BackForthButtonsComponent;
  let fixture: ComponentFixture<BackForthButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackForthButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackForthButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
