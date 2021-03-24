import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOrderFirstComponent } from './check-order-first.component';

describe('CheckOrderFirstComponent', () => {
  let component: CheckOrderFirstComponent;
  let fixture: ComponentFixture<CheckOrderFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOrderFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOrderFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
