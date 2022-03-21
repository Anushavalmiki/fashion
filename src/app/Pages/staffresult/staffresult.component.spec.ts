import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffresultComponent } from './staffresult.component';

describe('StaffresultComponent', () => {
  let component: StaffresultComponent;
  let fixture: ComponentFixture<StaffresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
