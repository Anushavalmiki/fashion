import { Component, OnInit } from '@angular/core';
import { LearningService } from '../learning.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subjectdetails',
  templateUrl: './subjectdetails.component.html',
  styleUrls: ['./subjectdetails.component.css']
})
export class SubjectdetailsComponent implements OnInit {

  constructor(private LearningService:LearningService ) { }
  courseid:any;
  courselist:any;
  subjectname:any;
  description:any;

  ngOnInit(): void {
    this.GetCourse();
    this.courseid="";
  }

  getcourseid(event:any){
    this.courseid=event.target.value
  }

  public GetCourse(){
    this.LearningService.GetCourse().subscribe(
      data=>{
        this.courselist=data;
      }
    )
  }

  
  save(){
    debugger
    var entity={
      "Name":this.subjectname,
      "Description":this.description,
       "CourseID":this.courseid
    }
    this.LearningService.InsertSubjectMaster(entity).subscribe(
      data=>{
       Swal.fire("Saved Successfully");
       location.href="#/Subject";
      }
    )
  }


}
