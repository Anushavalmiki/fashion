import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-path-details',
  templateUrl: './learning-path-details.component.html',
  styleUrls: ['./learning-path-details.component.css']
})
export class LearningPathDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  back(){
    location.href="#/LearningPathDashboard";
  }
  




}
