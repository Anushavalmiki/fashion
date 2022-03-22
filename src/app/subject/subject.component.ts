import { Component, OnInit } from '@angular/core';
import { LearningService } from '../learning.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private LearningService:LearningService ) { }
  subjectlist:any;
  search:any;
  ngOnInit(): void {
    this.GetSubjectMaster();
  }

   public GetSubjectMaster(){
    this.LearningService.GetSubjectMaster().subscribe(
      data=>{
        this.subjectlist=data;
        this.dumpsubjectlist=data;
      }
    )
   }

   edit(id:any){
     location.href="#/Subjectdetails/"+id;
   }

   delete(id:any){

   }

   subjectid:any;
   dumpsubjectlist:any;
   getsubjectid(event:any){
     this.subjectid=event.target.length;
    

   }






}
