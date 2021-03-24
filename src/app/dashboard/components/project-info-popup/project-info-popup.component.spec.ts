import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoPopupComponent } from './project-info-popup.component';

describe('ProjectInfoPopupComponent', () => {
  let component: ProjectInfoPopupComponent;
  let fixture: ComponentFixture<ProjectInfoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInfoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
