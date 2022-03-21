import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';

@Component({
  selector: 'app-assessment-dashboardnew',
  templateUrl: './assessment-dashboardnew.component.html',
  styleUrls: ['./assessment-dashboardnew.component.css']
})
export class AssessmentDashboardnewComponent implements OnInit {

  constructor(private LearningService:LearningService) { }
  search:any;
  ngOnInit(): void {
    this.GetAssessments();
    this. GetQuestionMaster();
    this.GetCourse();
  }


  courseid:any;
  quetionlist:any;
  dummquetionlist:any;
  
  getcourseid(even: any) {
    debugger
    this.courseid = even.target.value;
    if (even.target.value != 0) {
      debugger
      this.quetionlist = this.dummquetionlist.filter((x: { courseID: any; }) => x.courseID == this.courseid)
    }
    else{
      debugger
      this.GetAssessments()
    }

  }

  assessmentlist:any;
  public GetAssessmentResult() {
    debugger
    this.LearningService.GetAssessmentResult().subscribe(
      data => {
        debugger
        this.assessmentlist = data;
      })
  }


  questiontype:any;
  dummquestiontype:any;
  public GetQuestionMaster() {
    debugger
    this.LearningService.GetQuestionMaster().subscribe(
      data => {
        debugger
        this.questiontype = data;
      })
  }

  question:any;
  getquestion(even:any){
    if(even.target.value !=0){
      this.question=even.target.value;
      debugger
      this.quetionlist = this.dummquetionlist.filter((x: { questionID: any; }) => x.questionID == this.question);
      this.count=this.quetionlist.length;
    }
    else{
      this.GetAssessments();
    }
  }

  test:any;
  public GetTestResponse() {
    debugger
    this.LearningService.GetTestResponse().subscribe(
      data => {
        debugger
        this.test = data;
      })
  }







  courselist:any;
  public GetCourse() {
    debugger
    this.LearningService.GetCourseDropdown().subscribe(
      data => {
        debugger
        this.courselist = data;
      })
  }





 
  count:any;
  public GetAssessments() {
    debugger
    this.LearningService.GetAssessments().subscribe(
      data => {
        debugger
        this.quetionlist = data;
        console.log("questionlist",this.quetionlist)
        this.dummquetionlist = data;
      
        this.count = this.quetionlist.length;
      })
  }






}
