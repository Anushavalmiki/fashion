import { Component, OnInit } from '@angular/core';
import { LearningService } from '../learning.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subjectdetails',
  templateUrl: './subjectdetails.component.html',
  styleUrls: ['./subjectdetails.component.css']
})
export class SubjectdetailsComponent implements OnInit {

  constructor(private LearningService:LearningService,private ActivatedRoute:ActivatedRoute ) { }
  courseid:any;
  courselist:any;
  subjectname:any;
  description:any;
  id:any;
  result:any;
  name:any;
  coursename:any;

  ngOnInit(): void {
    this.GetCourse();
    this.courseid="";

 


    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetSubjectMaster();
      }
    })

  }
   
  public GetSubjectMaster(){
    debugger
    this.LearningService.GetSubjectMaster().subscribe(
      data=>{
        this.result=data;
        console.log("res",this.result);
        this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
        this.courseid=this.result[0].courseID;
        this.subjectname=this.result[0].name;
        this.description=this.result[0].description
      }
    )
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

  update(){
    debugger
    var entity={
      "ID":this.id,
      "Name":this.subjectname,
      "Description":this.description,
      "CourseID":this.courseid
    }
    this.LearningService.UpdateSubjectMaster(entity).subscribe(
      data=>{
        let result = data;
        Swal.fire("Updated Successfully");
        location.href="#/Subject";
      }
    )
  }


}
