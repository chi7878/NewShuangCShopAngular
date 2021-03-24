import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerLoginComponent } from './inner-login.component';

describe('InnerLoginComponent', () => {
  let component: InnerLoginComponent;
  let fixture: ComponentFixture<InnerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
