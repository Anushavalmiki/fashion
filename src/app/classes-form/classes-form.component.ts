import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-classes-form',
  templateUrl: './classes-form.component.html',
  styleUrls: ['./classes-form.component.css']
})
export class ClassesFormComponent implements OnInit {
  id:any;
  result:any;
  CourseList:any;
  BatchList:any;


  EmailID:any;
  StartDate:any;
  EndDate:any;
  BatchName:any;
  AllowedStudents:any;

  constructor(public LearningService:LearningService, public ActivatedRoute:ActivatedRoute) { }
  trainerlist:any;
  ngOnInit(): void {

    this.subjectID=0;
    this.CourseID=0;
    this.BatchName=0;
    this.GetSubjectMaster();
    this.GetBatch();

    // this.ActivatedRoute.params.subscribe(params => {
    //   debugger
    //   this.id = params["id"];
    //   if (this.id != null && this.id != undefined) {
    //     this.GetTrainer();
    //   }
    // })

    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetClasses();
      }
    })

    this.GetCourse();
    // this.ActivatedRoute.params.subscribe(params => {
    //   debugger
    //   this.id = params["id"];
    //   if (this.id != null && this.id != undefined) {
    //     this.GetCourse();
    //   }
    // })
    // this.TrainerID=0;
    // this.CourseID=0;
    // this.BatchName=0;
  }

  trainerName:any;
  courseName:any;

  GetClasses() {
    this.LearningService.GetClasses().subscribe(
    data => {
    debugger
    this.result = data;
		this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
    this.subjectID=this.result[0].subjectID;
    this.CourseID=this.result[0].courseID;
		// this.EmailID=this.result[0].emailID;
		this.date=this.result[0].date;
    this.EndDate=this.result[0].endDate;
    this.BatchName=this.result[0].batchID;
    this.AllowedStudents=this.result[0].noOfStudentsEnrolled;
      }
    ) 
  }

  Submit(){
    debugger 
   var json = {  
     "subjectID":this.subjectID,
     "courseID":this.CourseID,
      // "emailID": this.EmailID,
      "date": this.date,
      "endDate": this.EndDate,
      "batchID": this.BatchName,
      "noOfStudentsEnrolled": this.AllowedStudents
    };
    this.LearningService.InsertTrainerCourseMapping(json).subscribe(
      data => {
        debugger
        let trainerlist = data;
    alert("Successfully Submitted...!")
      location.href="#/ClassesDashboard";
      })
  }

  date:any;
  Update(){
    debugger
     var json = {
      "ID": this.id,
      "subjectID":this.subjectID,
      "courseID":this.CourseID,
      // "emailID": this.EmailID,
      "date": this.date,
      "endDate": this.EndDate,
      "batchID": this.BatchName,
      "noOfStudentsEnrolled": this.AllowedStudents         
      };
    
      this.LearningService.UpdateTrainerCourseMapping(json).subscribe(
        data => {
        debugger
        let result = data;
        Swal.fire("Successfully Updated...!");
        location.href="#/ClassesDashboard";
      })
  }

  CourseID:any;
  getCourseID(even:any)
  {
    debugger
    this.CourseID=even.target.value;
  }
  public GetCourse() {
    debugger
    this.LearningService.GetCourse().subscribe(
      data => {
        debugger
        this.CourseList = data;
      })
  }

  // BatchName:any;
  getBatchName(even:any)
  {
    debugger
    this.BatchName=even.target.value;
  }
  public GetBatch() {
    debugger
    this.LearningService.GetBatch().subscribe(
      data => {
        debugger
        this.BatchList = data;
      })
  }

  subjectID:any
  subjectlist:any;
  geSubjectID(even:any)
  {
    debugger
    this.subjectID=even.target.value;
  }
  public GetSubjectMaster() {
    debugger
    this.LearningService.GetSubjectMaster().subscribe(
      data => {
        debugger
        this.subjectlist = data;
      })
  }

  cancel() {
    location.href = "#/ClassesDashboard";
  }
}

