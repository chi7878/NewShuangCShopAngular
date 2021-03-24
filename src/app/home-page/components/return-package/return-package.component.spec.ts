import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPackageComponent } from './return-package.component';

describe('ReturnPackageComponent', () => {
  let component: ReturnPackageComponent;
  let fixture: ComponentFixture<ReturnPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
