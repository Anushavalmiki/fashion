import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkanswer',
  templateUrl: './checkanswer.component.html',
  styleUrls: ['./checkanswer.component.css']
})
export class CheckanswerComponent implements OnInit {

  constructor(private AmazeService: LearningService, private ActivatedRoute: ActivatedRoute, private elementRef: ElementRef, public router: Router) { }
  id: any;
  useranssheet: any;

  ngOnInit(): void {
    debugger
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params['id'];
      this.AmazeService.GetTestResponseDetails().subscribe(data => {
        debugger
        this.useranssheet = data.filter(x => x.testResponseID == this.id);
      });

    }
    )
  }


  public submitAnswer() {
    debugger
    let list: any = this.useranssheet.filter((x: { type: number; }) => x.type == 2)
    for (var i = 0; i < list.length; i++) {
      var ett = {
        'ID': list[i].id,
        'marks': list[i].marks,
      }
      this.AmazeService.UpdateTestResponseDetails(ett).subscribe(data => {


      });
    }

    this.UpdateResult()


  }
  finalresult: any;
  Totalmarks: any;
  ObtainedMarks: any;
  userSubAnswer: any;
  public UpdateResult() {
    debugger
    this.AmazeService.GetTestResponseDetails().subscribe(data => {
      debugger
      this.finalresult = data.filter(x => x.testResponseID == this.id);
      let total: any = 0;
      this.finalresult.forEach((x: { weightage: any; }) => {
        total += Number(x.weightage);
      });
      this.Totalmarks = total;

      let total1: any = 0;
      this.finalresult.forEach((x: { marks: any; }) => {
        total1 += Number(x.marks);
      });
      this.ObtainedMarks = total1;
      var ett = {
        'ID': this.id,
        'Totalmarks': this.Totalmarks,
        'ObtainedMarks': this.ObtainedMarks,
        'Checked': 1
      }

      this.AmazeService.UpdateTestResponse(ett).subscribe(data => {
        Swal.fire('Submitted Successfully');
        location.href = '#/FinalResult'
      });
    });



  }

  public getdetailslist(list: any) {
    debugger
    let temp: any = list.userAnswer;
    var html = temp;
    var div = document.createElement("div");
    div.innerHTML = html;
    this.userSubAnswer = div.textContent || div.innerText || "";
  }


  
  Marks:any;
  public GetTestResponse() {
    debugger
    this.AmazeService.GetTestResponse().subscribe(
      data => {
        debugger
        this.Marks = data;
        
      })
  }


}
