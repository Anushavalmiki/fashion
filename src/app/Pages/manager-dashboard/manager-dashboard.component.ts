import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LearningService } from 'src/app/learning.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  joblist: any;
  search: any;
  count: any;
  staffid: any;
  manager: any;
  ename:any;
  constructor(public LearningService: LearningService) { }

  ngOnInit(): void {
    this.Showcards(2);
    this.show = 2;
    this.staffid = localStorage.getItem('userid');
    this.manager = localStorage.getItem('manager');
   // this.GetCandidateReg()
    // this.insertdetails()
    //this.GetEnroll();
  }

  public GetCandidateReg() {
    debugger
    // if (this.staffid == undefined) {
    //   this.LearningService.GetCandidateRegistration().subscribe(data => {
    //     this.joblist = data.filter(x => x.scheduled == 1 && x.interviewRejected == 0 && x.interviewSelected == 0);
    //     this.count = this.joblist.length;
    //   })
    // }
    // else {
    //   this.LearningService.GetCandidateRegistration().subscribe(data => {
    //     debugger
    //     this.joblist = data.filter(x => x.scheduled == 1 && x.interviewRejected == 0 && x.interviewSelected == 0 && x.staffID == this.staffid);
    //     this.count = this.joblist.length;
    //   })

    // }
  }
  result: any;

  public GetEnroll() {
    debugger
    this.LearningService.GetEnroll().subscribe(
      data => {
        debugger
        // this.result = data.filter(x => x.manager == this.manager );
        this.result = data
        this.dummemployeedetails=data
        this.count = this.result.length;

      })
  }

  id: any;
  public getid(id: any) {
    this.id = id
  }
  // public Accept(){

  // }
  // public Reject(){}

  public Acceptcandidate() {
    debugger
    var json = {
      "ID": this.id,
      "Status": 'Manager Approved'
    };

    this.LearningService.UpdateErollmentStatusApproved(json).subscribe(
      data => {
        debugger
        let result = data;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Approved!!',
          showConfirmButton: false,
          timer: 1500

        })
        this.Showcards(1);
      })

  }

  public Rejecttcandidate() {
    debugger
    var json = {
      "ID": this.id,
      "Status": 'Manager Rejected'
    };

    this.LearningService.UpdateErollmentStatusRejected(json).subscribe(
      data => {
        debugger
        let result = data;
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Rejected!!',
          showConfirmButton: false,
          timer: 1500

        })
        this.Showcards(3);
      })

    }

    employeedetails:any;
    dummemployeedetails:any;
    getstaffid(even: any) {
      this.staffid = even.target.value;
      if (even.target.value != 0) {
        this.result = this.dummemployeedetails.filter((x: { employeeId: any; }) => x.employeeId == this.staffid)
      }
      else{
        this.GetEnroll();
      }
    }

    show:any;
    Showcards(value: any) {
      this.show = value;
      if (value == 1) {
        this.LearningService.GetEnroll().subscribe(
          data => {
            debugger
            // this.result = data.filter(x => x.manager == this.manager );
            this.result = data.filter(x => x.status == 'Manager Approved' );
            this.count = this.result.length;
          })
        // this.GetCourse();
      }
      else if (value == 2) {
        this.LearningService.GetEnroll().subscribe(
          data => {
            debugger
            // this.result = data.filter(x => x.manager == this.manager );
            this.result = data.filter(x => x.status == 'Manager Pending' );
            this.count = this.result.length;
          })
        // this.GetApproveCourse();
      }
      else if (value == 3) {
        this.LearningService.GetEnroll().subscribe(
          data => {
            debugger
            // this.result = data.filter(x => x.manager == this.manager );
            this.result = data.filter(x => x.status == 'Manager Rejected' );
            this.count = this.result.length;
          })
        // this.GetApproveCourse();
      }
  
    }
}


