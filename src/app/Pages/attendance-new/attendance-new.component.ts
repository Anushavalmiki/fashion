import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-attendance-new',
  templateUrl: './attendance-new.component.html',
  styleUrls: ['./attendance-new.component.css']
})
export class AttendanceNewComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private LearningService: LearningService) { }
  search: any;
  id: any;
  result: any;
  count: any;
  roleid:any;
  userid:any;
  month:any;
  year:any;
  Attendancecopy:any;
  // CourseList:any;
  CourseID:any;
  courselist:any;
  courselistcopy:any;
  ngOnInit(): void {
    this.roleid = sessionStorage.getItem('roleid');
    this.userid = sessionStorage.getItem('userid');
    this.GetAttendance_New();
    this.GetCourse();
    this.month="0";
    this.year="0";
    this.CourseID='';
  }



  Attendance:any;
  public GetAttendance_New() {
    debugger
    this.LearningService.GetAttendance_New().subscribe(
      data => {
        debugger
        if(this.roleid==2){
          this.Attendance=data.filter(x=>x.empID==this.userid) 
          debugger
          this.courselist= [...new Set(data.map(item => item.courseName))]; // [ 'A', 'B']
        //  this.courselist= data.filter((courseID, i, ar) => ar.indexOf(courseID) === i);
        }
        else if(this.roleid==4){
          this.Attendance=data.filter(x=>x.trainerID==this.userid);

        }
        else{
          this.Attendance=data
        }
        this.Attendancecopy= this.Attendance
      })
  }

  getmonthID(even: any) {
    this.month = even.target.value;
  }


  public GetFilteredMonth() {
    this.LearningService.GetAttendance_New().subscribe(data => {
      debugger
      this.Attendance = this.Attendancecopy.filter((x: { month: any; }) => x.month==this.month)
    })
  }

  getYearID(even: any) {
    this.year = even.target.value;
  }


  public GetFilteredYear() {
    this.LearningService.GetAttendance_New().subscribe(data => {
      debugger
      this.Attendance = this.Attendancecopy.filter((x: { year: any; }) => x.year==this.year)


    })
  }

  getCourseID(even: any) {
    debugger
    this.CourseID = even.target.value;
    if(even.target.value!=''){
      this.Attendance=this.Attendancecopy.filter((x: { courseName: any; })=>x.courseName==this.CourseID);
    }
    else{
      this.GetAttendance_New();
    }  
  }


  public GetCourse() {
    debugger
    this.LearningService.GetTrainerCourseMapping().subscribe(
      data => {
        debugger
        if(this.roleid==4){
          this.courselist = data.filter(x=>x.trainerID==this.userid);
        }
        
        // else{
        // this.courselist = data;
        // }
        // this.courselistcopy= this.courselist;
      })
  }

  public GetFilteredCourse() {
    this.LearningService.GetAttendance_New().subscribe(data => {
      debugger
      this.Attendance = this.Attendancecopy.filter((x: { courseID: any; }) => x.courseID==this.CourseID)
    })
  }
  
  courseid:any;
  getcourseid(event:any){
    this.courseid=event.target.value;
    if(event.target.value!='')
    {
      this.GetFilteredCourse()
    }
    else{
      this.GetAttendance_New();
    }
  }

  // public GetCourse(){
  //   this.LearningService.GetCourse().subscribe(
  //     data=>{
  //       this.courselist=data;
  //     }
  //   )
  // }


  // public GetEnroll(){
  //   this.LearningService.GetEnroll().subscribe(
  //     data => {
  //       debugger
  //       // this.result = data.filter(x => x.manager == this.manager );
  //       // this.result = data.filter(x => x.status == 'Manager Assigned' );
  //       this.result =  data.filter(x => x.type == 'Manager Assign')
  //       this.count = this.result.length;
  //     })
  // }


  



}
