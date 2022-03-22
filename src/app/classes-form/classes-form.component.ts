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
  id: any;
  result: any;
  CourseList: any;
  BatchList: any;

  classTypeList:any
  EmailID: any;
  StartDate: any;
  EndDate: any;
  BatchName: any;
  AllowedStudents: any;
  startTime: any;
  subjectID: any
  subjectlist: any;
  date: any;

  courseName: any;
  endTime: any;
  classLink: any;
  CourseID: any;
  className:any;
  userid:any;
  roleid:any;
  classTypeId:any;
  constructor(public LearningService: LearningService, public ActivatedRoute: ActivatedRoute) { }
  trainerlist: any;
  ngOnInit(): void {
    this.userid = sessionStorage.getItem('userid');
    this.roleid = sessionStorage.getItem('roleid');
    this.subjectID = 0;
    this.CourseID = 0;
    this.classTypeId=0;
    this.GetClassType();

    this.GetSubjectMaster();


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



  GetClasses() {
    this.LearningService.GetClasses().subscribe(
      data => {
        debugger
        this.result = data;
        this.result = this.result.filter((x: { id: any; }) => x.id == Number(this.id));
        this.subjectID = this.result[0].subjectID;
        this.CourseID = this.result[0].courseID;
        this.classTypeId=this.result[0].classTypeID;
        this.date = this.result[0].date;
        this.className = this.result[0].className;
        this.startTime = this.result[0].startTime;
        this.endTime = this.result[0].endTime;
        this.classLink = this.result[0].classLink;
      }
    )
  }

  Submit() {
    debugger
    var json = {
      "subjectID": this.subjectID,
      "courseID": this.CourseID,
      "className": this.className,
      "ClassTypeID":this.classTypeId,
      "date": this.date,
      "startTime": this.startTime,
      "endTime": this.endTime,
      "classLink": this.classLink
    };
    this.LearningService.InsertClasses(json).subscribe(
      data => {
        debugger
        let trainerlist = data;
        Swal.fire("Successfully Submitted...!")
        location.href = "#/ClassesDashboard";
      })
  }


  Update() {
    debugger
    var json = {
      "ID": this.id,
      "subjectID": this.subjectID,
      "courseID": this.CourseID,
      "className": this.className,
      "ClassTypeID":this.classTypeId,
      "date": this.date,
      "startTime": this.startTime,
      "endTime": this.endTime,
      "classLink": this.classLink
    };

    this.LearningService.UpdateClasses(json).subscribe(
      data => {
        debugger
        let result = data;
        Swal.fire("Successfully Updated...!");
        location.href = "#/ClassesDashboard";
      })
  }


  getCourseID(even: any) {
    debugger
    this.CourseID = even.target.value;
    this.LearningService.GetSubjectMaster().subscribe(
      data => {
        debugger
        this.subjectlist = data.filter(x => x.courseID == this.CourseID);
      })
  }
  public GetCourse() {
    debugger
    this.LearningService.GetTrainerCourseMapping().subscribe(
      data => {
        debugger
        // if(this.roleid==4){
        //   this.CourseList = data.filter(x=>x.trainerID==this.userid);
        // }
        // else{
          this.CourseList = data
        // }
       
      })
  }




  geSubjectID(even: any) {
    debugger
    this.subjectID = even.target.value;
  }
  public GetSubjectMaster() {
    debugger
    this.LearningService.GetSubjectMaster().subscribe(
      data => {
        debugger
        this.subjectlist = data;
      })
  }

  
  geclassTypeId(even: any) {
    debugger
    this.classTypeId = even.target.value;
  }
  public GetClassType() {
    debugger
    this.LearningService.GetClassType().subscribe(
      data => {
        debugger
        this.classTypeList = data;
      })
  }

  cancel() {
    location.href = "#/ClassesDashboard";
  }
}

