import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-dashboard',
  templateUrl: './category-dashboard.component.html',
  styleUrls: ['./category-dashboard.component.css']
})
export class CategoryDashboardComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private LearningService: LearningService) { }

  search: any;
  id: any;
  result: any;
  count: any;

  ngOnInit(): void {
    this.GetCategoryMaster();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetCategoryMaster();
      }
    })
  }

  public GetCategoryMaster() {
    debugger
    this.LearningService.GetCategoryMaster().subscribe(
      data => {
        debugger
        this.result = data;
        this.count = this.result.length;
      })
  }

  public Ondelete(id:any) {
    this.LearningService.DeleteCategoryMaster(id).subscribe(
      data => {
        debugger
        Swal.fire('Successfully Deleted...!');
        this.GetCategoryMaster();
      }
    )
  }

}
