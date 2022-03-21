import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-classes-dashboard',
  templateUrl: './classes-dashboard.component.html',
  styleUrls: ['./classes-dashboard.component.css']
})
export class ClassesDashboardComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private LearningService: LearningService) { }
  search: any;
  id: any;
  classessList: any;

  ngOnInit(): void {

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
        this.classessList = data;
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

}
