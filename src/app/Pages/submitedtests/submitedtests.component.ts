import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LearningService } from 'src/app/learning.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-submitedtests',
  templateUrl: './submitedtests.component.html',
  styleUrls: ['./submitedtests.component.css']
})
export class SubmitedtestsComponent implements OnInit {

  result: any;
  constructor(public LearningService: LearningService) { }
  staffid: any;
  search: any;
 
  ngOnInit(): void {

    this.staffid = localStorage.getItem('userid');

    this.LearningService.GetTestResponse().subscribe(
      data => {
        debugger
        this.result = data.filter(x => x.checked == 1);
      })
  }


}
