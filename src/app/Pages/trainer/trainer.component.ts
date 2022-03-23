import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private LearningService: LearningService) { }
  search: any;
  id: any;
  result: any;
  roleid:any;

  ngOnInit(): void {
    this.GetTrainer();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetTrainer();
      }
    })
  }

  public GetTrainer() {
    debugger
    this.LearningService.GetTrainer().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }

  public Ondelete(id:any) {
    this.LearningService.DeleteTrainer(id).subscribe(
      data => {
        debugger
        Swal.fire('Successfully Deleted...!');
        this.GetTrainer();
      }
    )
  }

  OpenPdf(pdf:any)
  {
    window.open(pdf,"_blank")
  }

}
