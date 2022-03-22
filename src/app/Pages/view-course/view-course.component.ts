import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LearningService } from 'src/app/learning.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private LearningService: LearningService) { }

  courseid: any;
  userid:any;
  manager:any;
  stafflist:any;
  count: any;
  ngOnInit(): void {
    
    this.userid = sessionStorage.getItem('userid')
    this.manager = sessionStorage.getItem('manager')
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.courseid = params['id'];
      this.GetTrainerCourseMapping();
      this.GetChapter()
    })


    this.LearningService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.id == this.userid);;
    });
  }
  // enroll() {
  //   Swal.fire({
  //     title: 'Enroll Confirmation',
  //     text: "Please click on OK to send Course Enrolment Request",
  //     icon: 'warning',
  //     // icon: 'success',
  //     showCloseButton: true,
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'OK'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire(
  //         'Request Sent',
  //         'Your request has been sent to manager for Approval',
  //         'success'
  //       )
  //     }
  //   })
  // }
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

  public PreviewPdf() {
    window.open('assets/Images/JAVA-Stack-Brochure.pdf', "blank")
  }

  chapterdetails: any;

  public GetChapter() {
    debugger
    this.LearningService.GetChapter().subscribe(
      data => {
        debugger
        this.chapterdetails = data.filter(x => x.courseID == this.courseid);
        this.count = this.chapterdetails.length;
      })
  }

  coursedetails: any;

  public GetTrainerCourseMapping() {
    debugger
    this.LearningService.GetTrainerCourseMapping().subscribe(data => {
      debugger
      this.coursedetails = data.filter(x => x.courseID == this.courseid);
      debugger
    })
  }

  rowno: any;
  showchapter:any;
  GetDetails(details: any) {
    debugger
    this.rowno = details.rowno;
    this.showchapter=details.Description;
  }

  
  course:any
  name:any;
  mobile:any;
  emailID:any;
  enroll(name:any, mobile:any,emailID:any){
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
           "courseid":this.courseid,
            "status":'Manager Pending',
            "employeeName":name,
            "phoneNo":mobile,
            "email":emailID  
          };
          this.LearningService.InsertEnroll(json).subscribe(
            data => {
              debugger
              let id = data;
              Swal.fire("saved Sucessfully");
            location.href="#/Catalog"
            })
        Swal.fire(
          'Request Sent',
          'Your request has been sent to manager for Approval',
          'success'
        );
        location.href="#/Catalog";
      }
    });
    } 

    
  public highlight(evt:any) {
    debugger
     var i, tablinks;
    //  localStorage.setItem("clickname",name)
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
  }








    
}

