import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCourseMappingComponent } from './trainer-course-mapping.component';

describe('TrainerCourseMappingComponent', () => {
  let component: TrainerCourseMappingComponent;
  let fixture: ComponentFixture<TrainerCourseMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerCourseMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerCourseMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
