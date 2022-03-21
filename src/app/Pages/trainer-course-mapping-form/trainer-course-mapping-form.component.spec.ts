import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCourseMappingFormComponent } from './trainer-course-mapping-form.component';

describe('TrainerCourseMappingFormComponent', () => {
  let component: TrainerCourseMappingFormComponent;
  let fixture: ComponentFixture<TrainerCourseMappingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerCourseMappingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerCourseMappingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
