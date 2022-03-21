import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public LearningService: LearningService) { } 
  temp: any;
  userid: any;
  showenrolment: any;
  ngOnInit(): void {
    this.userid = sessionStorage.getItem('userid')
    this.temp = sessionStorage.getItem('temp');
    this.GetAllCounts();
    this.GetCourse();
    if (this.userid == undefined) {
      this.showenrolment = 1;
    }
    else {
      this.showenrolment = 0;;
    }
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




  countlist: any;
  public GetAllCounts() {
    debugger
    if (this.userid != undefined) {
      this.LearningService.GetAllCounts(this.userid, 2).subscribe(
        data => {
          debugger
          this.countlist = data[0];
        })
    }
    else {
      this.LearningService.GetAllCounts(0, 1).subscribe(
        data => {
          debugger
          this.countlist = data[0];
        })
    }

  }

  coursedetails: any;
  assesmentlist:any;
  trainerlist:any;
  chapterlist:any;
  public GetCourse() {
    debugger
    if(this.userid!=undefined)
    {
      this.LearningService.GetEnroll().subscribe(
        data => {
          debugger
          this.coursedetails = data.filter(x=>x.staffID==this.userid&&x.status=='Manager Approved');
        })

        this.LearningService.GetTrainerCourseMappingByEnroll().subscribe(
          data => {
            debugger
            this.trainerlist = data.filter(x=>x.staffID==this.userid&&x.status=='Manager Approved');
          })

          this.LearningService.GetEnrollCourseChaptersAssessment().subscribe(
            data => {
              debugger
              this.assesmentlist = data.filter(x=>x.staffID==this.userid&&x.status=='Manager Approved');
              debugger
            })
  
            this.LearningService.GetEnrollCourseChapters().subscribe(
              data => {
                debugger
                this.chapterlist = data.filter(x=>x.staffID==this.userid&&x.status=='Manager Approved');
              })
    }
    else
    {
      this.LearningService.GetCourse().subscribe(
        data => {
          debugger
          this.coursedetails = data;
        })
        this.LearningService.GetChapter().subscribe(
          data => {
            debugger
            this.chapterlist = data;
          })
  

        this.LearningService.GetTrainerCourseMappingByEnroll().subscribe(
          data => {
            debugger
            this.trainerlist = data;
          })

          this.LearningService.GetChapterAssessment().subscribe(
            data => {
              debugger
              this.assesmentlist = data;
              debugger
            })
  
            // this.LearningService.GetEnroll().subscribe(
            //   data => {
            //     debugger
            //     this.chapterlist = data;
            //   })

    }
 
  }


  


  courseCount: any;
  public GetApproveCourse() {
    debugger

    this.LearningService.GetApproveCourse(this.userid).subscribe(data => {
      debugger
      this.coursedetails = data;
      this.courseCount = this.coursedetails.length;
      debugger
    })
  }



}
