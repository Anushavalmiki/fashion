import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentDashboardnewComponent } from './assessment-dashboardnew.component';

describe('AssessmentDashboardnewComponent', () => {
  let component: AssessmentDashboardnewComponent;
  let fixture: ComponentFixture<AssessmentDashboardnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentDashboardnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentDashboardnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
