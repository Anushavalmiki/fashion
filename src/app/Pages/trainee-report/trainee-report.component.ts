import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-trainee-report',
  templateUrl: './trainee-report.component.html',
  styleUrls: ['./trainee-report.component.css']
})
export class TraineeReportComponent implements OnInit {
  



  search:any;
  constructor(private LearningService:LearningService,private ActivatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.GetTrainerReport();
    this.GetDepartmentMaster();
    this.GetCourse();
  }
  dummemployeereportlist:any;

  employeereportlist:any;
   public GetTrainerReport(){
     debugger
     this.LearningService.GetTrainerReport(0,0).subscribe(data=>{
       this.employeereportlist=data;
       this.dummemployeereportlist=data;
     }
      )
   }


   fileName = 'Approved Applicants Reports.xlsx';
   exportexcel(): void {
     /* table id is passed over here */
     let element = document.getElementById('download');
     debugger
     const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
     debugger
 
     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName);
 
   }


   departmentlist:any;
   
  public GetDepartmentMaster(){
    debugger
    this.LearningService.GetDepartmentMaster().subscribe(
      data => {
        debugger
        this.departmentlist = data;
      })
  }


  departmentid:any;
  dumdeptlist:any
  getdepartmentid(even:any){
    debugger
    this.departmentid = even.target.value;
    if (even.target.value != 0) {
      this.employeereportlist = this.dummemployeereportlist.filter((x: { departmentID: any; }) => x.departmentID == this.departmentid)
    }
    else{
      this.GetTrainerReport();
    }
  }


  courseid:any;
  getcourseid(event:any){
    this.courseid=event.target.value;
    this.employeereportlist=this.dummemployeereportlist.filter((x: { courseID: any; })=>x.courseID==this.courseid);
  }
 

  courselist:any;
  public GetCourse(){
    this.LearningService.GetCourse().subscribe(
      data=>{
        this.courselist=data;
       
      }
    )
  }


}
