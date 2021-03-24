import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOrderFinishedComponent } from './check-order-finished.component';

describe('CheckOrderFinishedComponent', () => {
  let component: CheckOrderFinishedComponent;
  let fixture: ComponentFixture<CheckOrderFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOrderFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOrderFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
