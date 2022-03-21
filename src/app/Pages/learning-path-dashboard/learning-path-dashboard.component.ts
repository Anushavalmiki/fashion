import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-learning-path-dashboard',
  templateUrl: './learning-path-dashboard.component.html',
  styleUrls: ['./learning-path-dashboard.component.css']
})
export class LearningPathDashboardComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private LearningService: LearningService) { }
  search: any;
  id: any;
  result: any;
  result1: any;
  result2: any;

  ngOnInit(): void {
    this.GetEmployee();
    this.GetCourse();
    this.GetTrainerCourseMapping();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetEmployee();
      }
    })
  }

  public GetEmployee() {
    debugger
    this.LearningService.GetEmployee().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }

  public GetCourse() {
    debugger
    this.LearningService.GetCourse().subscribe(
      data => {
        debugger
        this.result1 = data;
      })
  }
  public GetTrainerCourseMapping() {
    debugger
    this.LearningService.GetTrainerCourseMapping().subscribe(
      data => {
        debugger
        this.result2 = data;
      })
  }


  enroll(){
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
        Swal.fire(
          'Request Sent',
          'Your request has been sent to manager for Approval',
          'success'
        )
      }
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
 

 

}
