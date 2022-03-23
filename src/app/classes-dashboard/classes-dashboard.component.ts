import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { EventObject, FullCalendarOptions } from 'ngx-fullcalendar';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-classes-dashboard',
  templateUrl: './classes-dashboard.component.html',
  styleUrls: ['./classes-dashboard.component.css']
})
export class ClassesDashboardComponent implements OnInit {


  constructor(private ActivatedRoute: ActivatedRoute, private LearningService: LearningService,  public datePipe: DatePipe) { }
  search: any;
  id: any;
  public showorhidecontent: any;
  options: FullCalendarOptions | undefined;
  events: EventObject[] | undefined;
  roleid: any;
  public selectedlanguage: any;
  public selectedlanguage1: any;
  public callenderyear: any;
  public callenderMonth: any;
  public callenderstartday: any;
  public callenderendday: any;
  date: any;
  public callenderdaysdount: any = [];
  public callenderBindData = new Date();
  public todaydate = new Date().getDate();
  public options1: any;
  todaydate1: any;
  public todayDay = this.datePipe.transform(new Date().getDay(), 'EEEE');
  classessList: any;
  workplaceList:any;
  userid:any;

  ngOnInit(): void {
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    var curr = new Date;
    this.todaydate1 = formatDate(myDate, format, locale);
    this.options1 = {
      theme: 'default',
      range: 'tm',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'dd/MM/yyyy',
      outputFormat: 'YYYY/MM/DD',
      startOfWeek: 1
    };

    this.roleid = sessionStorage.getItem('roleid');
    this.userid = sessionStorage.getItem('userid');
    this.GetClasses();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetClasses();
      }
    })
  }

  public GetClasses() {
    debugger
    this.LearningService.GetClasses().subscribe(
      data => {
        debugger
        if(this.roleid==4)
        {
          this.classessList =  data.filter(x=>x.trainerID==this.userid)
        }
        else{
          this.classessList =  data
        }
      


        this.buildcallender(this.classessList);
      })
  }

  public Ondelete(id:any) {
    this.LearningService.DeleteClasses(id).subscribe(
      data => {
        debugger
        Swal.fire('Successfully Deleted...!');
        this.GetClasses();
      }
    )
  }

  OpenPdf(pdf:any)
  {
    window.open(pdf,"_blank")
  }



  
  changeStatus(evn: any) {
   
      if (evn.target.value == 1) {
        this.showorhidecontent = true;
      }
      else {
        this.showorhidecontent = false;
      }
    
  }

  public buildcallender(MaintainanceList: string | any[]) {
    debugger
    this.callenderdaysdount.length = 0;
    this.callenderyear = this.callenderBindData.getFullYear();
    this.callenderMonth = this.datePipe.transform(this.callenderBindData, 'MMMM');
    this.callenderstartday = new Date(this.callenderBindData.getFullYear(), this.callenderBindData.getMonth(), 1);
    this.callenderendday = new Date(this.callenderBindData.getFullYear(), this.callenderBindData.getMonth() + 1, 0);
    this.callenderdaysdount.length = this.callenderendday.getDate();
    let o = 0;
    for (let i = 0; i < this.callenderdaysdount.length; i++) {
      let sdate = this.callenderstartday;
      let _date;
      if (sdate.getDate() == 1 && o == 0) {
        _date = sdate.setDate(sdate.getDate() + 0);
        o++
      }
      else {
        _date = sdate.setDate(sdate.getDate() + 1);
      }
      _date = this.datePipe.transform(sdate, 'dd');
      let _day = this.datePipe.transform(sdate, 'EEE');
      let dateformat = this.datePipe.transform(sdate, 'yyyy-MM-ddTHH:mm:ss');

      this.callenderdaysdount[i] = { date: _date, day: _day, dateformat: dateformat };
    }

    //Events Binding

    for (let j = 0; j < MaintainanceList.length; j++) {
      debugger;
      let currenteventlist = this.callenderdaysdount.filter((x: { dateformat: string | number | Date; }) => this.datePipe.transform(x.dateformat, 'yyyy-MM-dd') == this.datePipe.transform(MaintainanceList[j].date, 'yyyy-MM-dd'));
      if (currenteventlist.length > 0) {
        for (let i = 0; i < currenteventlist.length; i++){
          this.callenderdaysdount[currenteventlist[i].date - 1]['ID'] = MaintainanceList[j].id;
          this.callenderdaysdount[currenteventlist[i].date - 1]['className'] = MaintainanceList[j].className;
          this.callenderdaysdount[currenteventlist[i].date - 1]['classtype'] = MaintainanceList[j].classtype;
          this.callenderdaysdount[currenteventlist[i].date - 1]['mantainenceHtml'] =
            "<span class='event_PendingBookCommunity'> ID :  "+ MaintainanceList[j].id +
             "<br>  Class  : " + MaintainanceList[j].className +
             "<br>  Class type : " + MaintainanceList[j].classtype +
            // "<br>  End Time : " + MaintainanceList[j].endTime +
            // // "<br>  Unit :" + MaintainanceList[j].unitID +
            "</span>";
        }
        }
       

    }
  }

  public previousmonth() {
    debugger;
    this.callenderBindData.setMonth(this.callenderBindData.getMonth() - 1);
    this.buildcallender(this.classessList);
  }
  public nextmonth() {
    debugger;
    this.callenderBindData.setMonth(this.callenderBindData.getMonth() + 1);
    this.buildcallender(this.classessList);
  }
  public ShowMaintenanceRequest(evn: any) {
    debugger;
    var html = evn.srcElement.innerText.split(':');
    if (html.length <= 5) {
      debugger;
      var s2 = html[1].substring(1,2)
      let HTML = s2
      let MaintenanceRequest = this.classessList.filter((x: { id: any; }) => x.id == HTML  );
      Swal.fire(({
        title: '<strong><u>Class Details</u></strong>',
      
        html:
        

          '<p style="font-size: 14px;text-align: start;margin-left: 10px;"> Course : ' + MaintenanceRequest[0].courseName +
          '       <br>' +
          'Subject  : ' + MaintenanceRequest[0].subjectName +
          '       <br>' +
          'Start Time  : ' + MaintenanceRequest[0].startTime +
          '       <br>' +
          'End Time  : ' + MaintenanceRequest[0].endTime +
          '       <br>' +
          'Class Link: ' + MaintenanceRequest[0].classLink +
          '       <br>' +

          '</p>'
        ,
        // showCloseButton: true,
        showCancelButton: false,
        focusConfirm: true,

      }));
    }


  }

  public ShowMaintenanceRequest1(evn: any) {
    debugger;
    var html = evn.srcElement.innerText.split(':');
    if (html.length <= 5) {
      debugger;
      var s2 = html[1].substring(1,2)
      let HTML = s2
      let MaintenanceRequest = this.classessList.filter((x: { id: any; }) => x.id == HTML  );
      Swal.fire(({
        title: '<strong><u>Class Details</u></strong>',
      
        html:
        

          '<p style="font-size: 14px;text-align: start;margin-left: 10px;"> Course : ' + MaintenanceRequest[0].courseName +
          '       <br>' +
          'Subject  : ' + MaintenanceRequest[0].subjectName +
          '       <br>' +
          'Start Time  : ' + MaintenanceRequest[0].startTime +
          '       <br>' +
          'End Time  : ' + MaintenanceRequest[0].endTime +
          '       <br>' +
          'Class Link: ' + MaintenanceRequest[0].classLink +
          '       <br>' +

          '</p>'
        ,
        // showCloseButton: true,
        showCancelButton: false,
        focusConfirm: true,

      }));
    }


  }

}
