import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOrderSecondComponent } from './check-order-second.component';

describe('CheckOrderSecondComponent', () => {
  let component: CheckOrderSecondComponent;
  let fixture: ComponentFixture<CheckOrderSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOrderSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOrderSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
