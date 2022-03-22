import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';

@Component({
  selector: 'app-final-result',
  templateUrl: './final-result.component.html',
  styleUrls: ['./final-result.component.css']
})
export class FinalResultComponent implements OnInit {

  constructor(private LearningService:LearningService) { }
   search:any;
  ngOnInit(): void {
    this.GetTestResponse();

  }


  // Marks:any;
  // public GetTestResponse() {
  //   debugger
  //   this.LearningService.GetTestResponse().subscribe(
  //     data => {
  //       debugger
  //       this.Marks = data;
  //     })
  // }


    
  Marks:any;
  public GetTestResponse() {
    debugger
    this.LearningService.GetTestResponse().subscribe(
      data => {
        debugger
        this.Marks = data;
        
      })
  }




}
