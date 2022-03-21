import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { LearningService } from 'src/app/learning.service';

@Component({
  selector: 'app-my-course-dashboard',
  templateUrl: './my-course-dashboard.component.html',
  styleUrls: ['./my-course-dashboard.component.css']
})
export class MyCourseDashboardComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private LearningService: LearningService) { }
  show: any;
  stafflist: any;
  userid: any;
  search: any;
  managlist:any;
  manageremail:any;
  ngOnInit(): void {
  
    this.manager = sessionStorage.getItem('manager')
    this.userid = sessionStorage.getItem('userid')
    this.GetTrainerCourseMapping();
    this.GetEmpcoursecounts();

   

   this.Showcards(2);
    this.LearningService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.id == this.userid);
      this.managlist = data.filter(x=>x.id==this.manager)    
      this.manageremail=this.managlist[0].emailID
   
    });

    // this.show=2;

    
    this.GetAllCounts();
    this.show = 2;
  }

  coursedetails: any;
  result: any;

  public GetTrainerCourseMapping() {
    debugger
    this.LearningService.GetTrainerCourseMapping().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }



  public flip1(event: { currentTarget: any; }) {
    debugger
    var element = event.currentTarget;
    if (element.className === "card1") {
      if (element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      }
      else {
        element.style.transform = "rotateY(180deg)";
      }
    }


  };
  Showcards(value: any) {
    this.show = value;
    if (value == 1) {
      this.GetCourse();
    }
    else if (value == 2) {
      this.GetApproveCourse();
    }
   else if (value == 3) {
    this.LearningService.GetCourse().subscribe(data => {
      debugger
      this.coursedetails = data.filter(x=> x.staffID!=this.userid);
    });
    }
    else if (value == 4) {
      this.LearningService.GetCourse().subscribe(data => {
        debugger
        this.coursedetails = data.filter(x=> x.staffID=this.userid&&x.completed==1);
      });
      }
  }

  getcourseid(id:any)
  {
    this.courseid=id;
  }

  latestcoursedetails:any;
  lastassigned:any;
  public GetApproveCourse() {
    debugger
    this.LearningService.GetApproveCourse(this.userid).subscribe(data => {
      debugger
      this.coursedetails = data;
      this.latestcoursedetails = data[0];
      if(this.latestcoursedetails.length=0){
        this.lastassigned=0;
      }
      else{
        this.lastassigned=1;
      }

      debugger
    })
  }


  testresponse:any;
  GetTestResponse() {
    this.LearningService.GetTestResponse().subscribe(data => {
      debugger
      this.testresponse = data;
    });
  }


  GetCourse() {
    this.LearningService.GetCourse().subscribe(data => {
      debugger
      this.coursedetails = data;;
    });
  }

  manager:any;
  course: any
  name: any;
  mobile: any;
  emailID: any;
  courseid:any;
  enroll(name: any, mobile: any, emailID: any) {
    Swal.fire({
      title: 'Enroll Confirmation',
      text: "Please click on OK to send Course Enrolment Request",
      icon: 'warning',
      // icon: 'success',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {

      if (result.isConfirmed) {
        debugger
        var json = {
          "staffid": this.userid,
          "manager": this.manager,
          "courseid": this.courseid,
          "status": 'Manager Pending',
          "employeeName": name,
          "phoneNo": mobile,
          "email": emailID,
          "type":'Request to Manager'
        };
        this.LearningService.InsertEnroll(json).subscribe(
          data => {
            debugger
            let id = data;
            if(id!=0)
            {
              Swal.fire(
                'Request Sent',
                'Your request has been sent to manager for Approval',
                'success'
              );
              location.href = "#/Catalog"
            }
         else{
           Swal.fire("Already Enrolled")
         }
          })
      
        location.href = "#/Catalog";
      }
    });
  }

  countlist: any;
  public GetAllCounts() {
    debugger 
      this.LearningService.GetAllCounts(this.userid, 2).subscribe(
        data => {
          debugger
          this.countlist = data[0];
        })
  }

  empcountlist:any;
  public GetEmpcoursecounts() {
    debugger 
      this.LearningService.GetEmpcoursecounts(this.userid).subscribe(
        data => {
          debugger
          this.empcountlist = data[0];
        })

      }


      getenrollid(id:any)
      {
        debugger 
        this.LearningService.UpdateEmpCoursedetails(id).subscribe(
          data => {
            debugger
            this.empcountlist = data[0];
          })
  
      }



   

}
