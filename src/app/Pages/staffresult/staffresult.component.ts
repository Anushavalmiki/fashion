import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LearningService } from 'src/app/learning.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staffresult',
  templateUrl: './staffresult.component.html',
  styleUrls: ['./staffresult.component.css']
})
export class StaffresultComponent implements OnInit {

  joblist: any;
  search: any;
  count: any;
  staffid: any;
  manager: any;
  courselist: any;
  constructor(public LearningService: LearningService) { }

  ngOnInit(): void {
    // this.Showcards(2);
    this.getdetailslist();
    this.show = 2;
    this.staffid = localStorage.getItem('userid');
    this.manager = localStorage.getItem('manager');

    this.LearningService.GetMyDetails().subscribe(
      data => {
        debugger
        // this.result = data.filter(x => x.manager == this.manager );
        this.result = data.filter(x => x.supervisor == sessionStorage.getItem('userid'));
      })

  }
  courseID: any;

  result: any;

  public GetEnroll() {
    debugger
    this.LearningService.GetEnroll().subscribe(
      data => {
        debugger
        // this.result = data.filter(x => x.manager == this.manager );
        this.result = data
        this.dummemployeedetails = data
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
        this.GetEnroll();
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
        this.GetEnroll();
      })

  }

  employeedetails: any;
  dummemployeedetails: any;
  getstaffid(even: any) {
    this.staffid = even.target.value;
    if (even.target.value != 0) {
      this.result = this.dummemployeedetails.filter((x: { employeeId: any; }) => x.employeeId == this.staffid)
    }
    else {
      this.GetEnroll();
    }
  }
  result1:any;
  show: any;
  Showcards(value: any) {
    this.show = value;
    if (value == 1) {
      this.LearningService.GetEnroll().subscribe(
        data => {
          debugger
          // this.result = data.filter(x => x.manager == this.manager );
          this.result1 = data.filter(x => x.status == 'Manager Approved');
          this.count = this.result1.length;
        })
      // this.GetCourse();
    }
    else if (value == 2) {
      this.LearningService.GetEnroll().subscribe(
        data => {
          debugger
          // this.result = data.filter(x => x.manager == this.manager );
          this.result1 = data.filter(x => x.status == 'Manager Pending');
          this.count = this.result1.length;
        })
      // this.GetApproveCourse();
    }
    else if (value == 3) {
      this.LearningService.GetEnroll().subscribe(
        data => {
          debugger
          // this.result = data.filter(x => x.manager == this.manager );
          this.result1 = data.filter(x => x.status == 'Manager Rejected');
          this.count = this.result1.length;
        })
      // this.GetApproveCourse();
    }

  }

  detailslist: any;
  public getdetailslist() {
    debugger
    // this.empid = details.id;
    this.LearningService.GetTestResponse().subscribe(data => {
      debugger
      this.detailslist =data;
      //  data.filter(x => x.userID == details.id);
    });

    // this.LearningService.GetApproveCourse(details.id).subscribe(
    //   data => {
    //     debugger
    //     this.courselist = data;
    //   })
  }
  empid: any
  MarksObtained: any;
  TotalMarks: any;
  public getdetailslist1() {
    debugger
    this.LearningService.GetApproveCourse(this.empid).subscribe(
      data => {
        debugger
        this.courselist = data;
      })
  }

  public AllocateCertificate() {
    debugger
    var entity = {
      'CourseID': this.courseID,
      'EmployeeID': this.empid,
      'MarksObtained': this.MarksObtained,
      'TotalMarks': this.TotalMarks
    }
    this.LearningService.InsertCertification(entity).subscribe(
      data => {
        debugger
        Swal.fire('Certificate Alloted Successfully');
        location.reload();
      })

  }


}


