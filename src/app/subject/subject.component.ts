import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { LearningService } from '../learning.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private LearningService:LearningService ) { }
  subjectlist:any;
  search:any;
  subjectlistdetails:any;

  ngOnInit(): void {
    this.GetSubjectMaster();
    this.GetCourse();
    this.courseid=0;
  }

  
   public GetSubjectMaster(){
    this.LearningService.GetSubjectMaster().subscribe(
      data=>{
        this.subjectlist=data;
        this.dumcoursedetails=data;
       
      }
    )
   }

   edit(id:any){
     location.href="#/Subjectdetails/"+id;
   }

   delete(id:any){

   }




   


   courseid:any;
   getcourseid(event:any){
     this.courseid=event.target.value;
     if(event.target.value!=0){
      this.subjectlist=this.dumcoursedetails.filter((x: { courseID: any; })=>x.courseID==this.courseid)
     }
     else{
       this.GetSubjectMaster();
     }
     
   }


   coursedetails:any;
   dumcoursedetails:any;
  public GetCourse(){
    this.LearningService.GetCourse().subscribe(
      data=>{
        this.coursedetails=data;
       
      }
    )
  }





}
