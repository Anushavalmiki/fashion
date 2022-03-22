import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-trainer-course-mapping-form',
  templateUrl: './trainer-course-mapping-form.component.html',
  styleUrls: ['./trainer-course-mapping-form.component.css']
})
export class TrainerCourseMappingFormComponent implements OnInit {
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

    this.TrainerID=0;
    this.CourseID=0;
    this.BatchName=0;
    this.GetTrainer();
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
        this.GetTrainerCourseMapping();
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

  GetTrainerCourseMapping() {
    this.LearningService.GetTrainerCourseMapping().subscribe(
    data => {
    debugger
    this.result = data;
		this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
    this.TrainerID=this.result[0].trainerID;
    this.CourseID=this.result[0].courseID;
		// this.EmailID=this.result[0].emailID;
		this.StartDate=this.result[0].startDate;
    this.EndDate=this.result[0].endDate;
    this.BatchName=this.result[0].batchID;
    this.AllowedStudents=this.result[0].noOfStudentsEnrolled;
      }
    ) 
  }

  Submit(){
    debugger 
   var json = {  
     "trainerID":this.TrainerID,
     "courseID":this.CourseID,
      // "emailID": this.EmailID,
      "startDate": this.StartDate,
      "endDate": this.EndDate,
      "batchID": this.BatchName,
      "noOfStudentsEnrolled": this.AllowedStudents
    };
    this.LearningService.InsertTrainerCourseMapping(json).subscribe(
      data => {
        debugger
        let trainerlist = data;
    alert("Successfully Submitted...!")
      location.href="#/TrainerCourseMapping";
      })
  }


  Update(){
    debugger
     var json = {
      "ID": this.id,
      "trainerID":this.TrainerID,
      "courseID":this.CourseID,
      // "emailID": this.EmailID,
      "startDate": this.StartDate,
      "endDate": this.EndDate,
      "batchID": this.BatchName,
      "noOfStudentsEnrolled": this.AllowedStudents         
      };
    
      this.LearningService.UpdateTrainerCourseMapping(json).subscribe(
        data => {
        debugger
        let result = data;
        Swal.fire("Successfully Updated...!");
        location.href="#/TrainerCourseMapping";
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

TrainerID:any
  getTrainerID(even:any)
  {
    debugger
    this.TrainerID=even.target.value;
  }
  public GetTrainer() {
    debugger
    this.LearningService.GetTrainer().subscribe(
      data => {
        debugger
        this.trainerlist = data;
      })
  }

  cancel() {
    location.href = "#/TrainerCourseMapping";
  }
}
