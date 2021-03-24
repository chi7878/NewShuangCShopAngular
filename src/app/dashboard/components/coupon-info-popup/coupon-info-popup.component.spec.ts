import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponInfoPopupComponent } from './coupon-info-popup.component';

describe('CouponInfoPopupComponent', () => {
  let component: CouponInfoPopupComponent;
  let fixture: ComponentFixture<CouponInfoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponInfoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
