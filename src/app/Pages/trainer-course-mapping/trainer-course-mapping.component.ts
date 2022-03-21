import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-trainer-course-mapping',
  templateUrl: './trainer-course-mapping.component.html',
  styleUrls: ['./trainer-course-mapping.component.css']
})
export class TrainerCourseMappingComponent implements OnInit {
search:any;
count:any;

  constructor(private ActivatedRoute: ActivatedRoute, private LearningService: LearningService) { }

  ngOnInit(): void {
    this.GetTrainerCourseMappingDashboard();
  }
  Trainerdetails:any;

  public GetTrainerCourseMappingDashboard() {
    debugger
    this.LearningService.GetTrainerCourseMappingDashboard().subscribe(
      data => {
        debugger
        this.Trainerdetails = data;
        this.count = this.Trainerdetails.length;
      })
  }

  edit(id: any) {
    debugger
    location.href = "#/TrainerCourseMappingForm/" + id;
  }
  
  public Ondelete(id:any) {
    this.LearningService.DeleteTrainerCourseMapping(id).subscribe(
      data => {
        debugger
        Swal.fire('Successfully Deleted...!');
        this.GetTrainerCourseMappingDashboard();
      }
    )
  }



}
