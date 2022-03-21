import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-course-certificate-new',
  templateUrl: './course-certificate-new.component.html',
  styleUrls: ['./course-certificate-new.component.css']
})
export class CourseCertificateNewComponent implements OnInit {

  constructor(private LearningService:LearningService,private ActivatedRoute:ActivatedRoute) { }

  courseid:any;
  id:any;
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params['id'];
      this.GetEnrollCourseCertificateNew(this.id)
    }
    )     
    // debugger
    // this.UserName = sessionStorage.getItem('UserName');
    // this.getmycertiifcate();    
  }

  certificate:any;
  public GetEnrollCourseCertificateNew(ID:any) {
    debugger
    this.LearningService.GetEnrollCourseCertificateNew(ID).subscribe(
      data => {
        debugger
        this.certificate = data;
      })
  }





    
















  }





