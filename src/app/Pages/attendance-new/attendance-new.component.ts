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
  ngOnInit(): void {
    this.roleid = sessionStorage.getItem('roleid');
    this.userid = sessionStorage.getItem('userid');
    this.GetAttendance_New();
  }



  Attendance:any;
  public GetAttendance_New() {
    debugger
    this.LearningService.GetAttendance_New().subscribe(
      data => {
        debugger
        if(this.roleid==2){
          this.Attendance=data.filter(x=>x.empID==this.userid)
        }
        else if(this.roleid==4){
          this.Attendance=data.filter(x=>x.trainerID==this.userid);
        }
        
      })
  }



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
