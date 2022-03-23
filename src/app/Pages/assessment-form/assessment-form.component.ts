import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-angular';
@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.css']
})
export class AssessmentFormComponent implements OnInit {
  Course_Photo: any;
  Attachment: any;
  result: any;
  result1: any;
  results: any;
  courseid: any;
  chapterid: any;
  questionid: any;
  courseName: any;
  public Editor = ClassicEditor;
  constructor(public LearningService: LearningService, public ActivatedRoute: ActivatedRoute) { }
  CourseList: any;
  ChapterList: any;
  QuestionList: any;
  id: any;
  subjectID:any;
  subjectList:any;
  dumsubjectList:any;


  ngOnInit(): void {
    this.subjectid="";
    this.courseid="";
   
    this.GetQuestionMaster();
    this.GetSubjectMaster();
    this.GetChapter();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.questionid = params["id"];
      if (this.questionid != null && this.questionid != undefined) {
        this.GetQuestionMaster();
      }
    })


    this.chapterid="";
   
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.chapterid = params["id"];
      if (this.chapterid != null && this.chapterid != undefined) {
        this.GetChapter();
      }
    })

    this.GetCourse();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.courseid = params["id"];
      if (this.courseid != null && this.courseid != undefined) {
        this.GetCourse();
      }
    })

    this.GetSubjectMaster();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.courseid = params["id"];
      if (this.subjectID != null && this.subjectID != undefined) {
        this.GetSubjectMaster();
      }
    })

    // this.show = 1;
    // this.show2 = 1;
  }

  public GetQuestionMaster() {
    debugger
    this.LearningService.GetQuestionMaster().subscribe(
      data => {
        debugger
        this.QuestionList = data;
        this.questionid="";
      })
  }
  // public GetSubjectMaster() {
  //   debugger
  //   this.LearningService.GetSubjectMaster().subscribe(
  //     data => {
  //       debugger
  //       this.dumsubjectList = data;
  //       this.subjectID="";
  //     })
  // }


  dumchapterlist: any;
  dumpsubjectlist:any;
  public GetChapter() {
    debugger
    this.LearningService.GetChapter().subscribe(
      data => {
        debugger
        // this.ChapterList=data;
        this.dumchapterlist = data;       
        this.chapterid="";
      })
  }
  public GetCourse() {
    debugger
    this.LearningService.GetCourse().subscribe(
      data => {
        debugger
        this.CourseList = data;
        this.courseid="";
      })
  }



  cancel() {
    location.href = "/#/Assessmentdashboard";
  }
  files1: File[] = [];

  onSelect1(event: any) {
    console.log(event);
    this.files1.push(...event.addedFiles);
    this.uploadattachments1();
  }

  onRemove1(event: any) {
    console.log(event);
    this.files1.splice(this.files1.indexOf(event), 1);
  }

  public uploadattachments1() {
    debugger
    this.LearningService.AttachmentsUpload(this.files1).subscribe(res => {
      debugger
      this.Course_Photo = res;
      alert("ATTACHMENT UPLOADED");
    })
  }


  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.uploadattachments();
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  public uploadattachments() {
    debugger
    this.LearningService.AttachmentsUpload(this.files).subscribe(res => {
      debugger
      this.Attachment = res;
      alert("ATTACHMENT UPLOADED");
    })
  }
  Question: any;
  Option1: any;
  Option2: any;
  Option3: any;
  Option4: any;
  CorrectAnswer: any;
  Weightage: any;
  AssessmentName: any;

  tablecout: any;

  assessmenrArray: any = [];
  ADd() {
    debugger
    this.tablecout = 1;
    var json = {
      "CourseID": this.courseid,
      "SubjectID":this.subjectID,
      "ChapterID": this.chapterid,
      "QuestionID": this.questionid,
      "Question": this.Question,
      "Option1": this.Option1,
      "Option2": this.Option2,
      "Option3": this.Option3,
      "Option4": this.Option4,
      "CorrectAnswer": this.CorrectAnswer,
      "weightage": this.Weightage,
      "AssessmentName": this.AssessmentName
    };
    this.assessmenrArray.push(json)
    this.Question="";
    this.Option1="";
    this.Option2="";
    this.Option3="";
    this.Option4="";
    this.Weightage="";
    this.AssessmentName="";

 

    // this.LearningService.InsertAssessments(json).subscribe(
    //   data => {
    //     debugger
    //     let id = data;
    //     Swal.fire("Saved Successfully!!");
    //     location.href = "#/Assessmentdashboard"
    //   })
  }



  getCorrectAnswer(event: any) {
    debugger
    let value: any = event.target.value;
    if (value == 'A') {
      this.CorrectAnswer = this.Option1;
    }
    if (value == 'B') {
      this.CorrectAnswer = this.Option2;
    }
    if (value == 'C') {
      this.CorrectAnswer = this.Option3;
    }
    if (value == 'D') {
      this.CorrectAnswer = this.Option4;
    }
  }


  entity:any
  save() {
    debugger
    for (let i = 0; i <=this.assessmenrArray.length; i++) {
      debugger
    var entity = {
        "CourseID": this.assessmenrArray[i].CourseID,
        "SubjectID": this.assessmenrArray[i].SubjectID,
        "ChapterID": this.assessmenrArray[i].ChapterID,
        "QuestionID": this.assessmenrArray[i].QuestionID,
        "Question": this.assessmenrArray[i].Question,
        "Option1": this.assessmenrArray[i].Option1,
        "Option2": this.assessmenrArray[i].Option2,
        "Option3": this.assessmenrArray[i].Option3,
        "Option4": this.assessmenrArray[i].Option4,
        "CorrectAnswer": this.assessmenrArray[i].CorrectAnswer,
        "weightage": this.assessmenrArray[i].weightage,
        "AssessmentName": this.assessmenrArray[i].AssessmentNames
      };
      debugger
      this.LearningService.InsertAssessments(entity).subscribe(
        data => {
          debugger
          let id = data;
          Swal.fire("Saved Successfully!!");
          this.tablecout = 0;
          location.href = "#/Assessmentdashboard"
        })      



    }
   
   
       
  }



  show: any;
  show2: any;

  // ShowObjectives(value:any){
  //   debugger
  //   this.show=value;
  // }
  // ShowSubjectives(value:any){
  //   debugger
  //   this.show2=value;
  // }


  
  subjectlist:any;
  public GetSubjectMaster(){
    this.LearningService.GetSubjectMaster().subscribe(
      data=>{
        this.dumpsubjectlist=data;
      }
    )
  }


  getcourseid(even: any) {
    this.courseid = even.target.value;
    this.subjectlist = this.dumpsubjectlist.filter((x: { courseID: any; }) => x.courseID == this.courseid)
  }


  subjectid:any;
  getsubjectid(event:any){
    this.subjectid=event.target.value;
    this.ChapterList=this.dumchapterlist.filter((x: { subjectID: any; }) => x.subjectID == this.subjectid)
  }
  
  getchapterid(event:any){
    this.chapterid=event.target.value;
  }


}
