import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmentDetailsComponent } from './assesment-details.component';

describe('AssesmentDetailsComponent', () => {
  let component: AssesmentDetailsComponent;
  let fixture: ComponentFixture<AssesmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssesmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
