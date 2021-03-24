import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOrderHeaderComponent } from './check-order-header.component';

describe('CheckOrderHeaderComponent', () => {
  let component: CheckOrderHeaderComponent;
  let fixture: ComponentFixture<CheckOrderHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOrderHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOrderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
