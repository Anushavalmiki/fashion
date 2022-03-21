import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCertificateNewComponent } from './course-certificate-new.component';

describe('CourseCertificateNewComponent', () => {
  let component: CourseCertificateNewComponent;
  let fixture: ComponentFixture<CourseCertificateNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCertificateNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCertificateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
