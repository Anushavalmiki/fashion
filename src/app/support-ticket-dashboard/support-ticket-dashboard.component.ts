import { Component, OnInit } from '@angular/core';
import { LearningService } from '../learning.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-support-ticket-dashboard',
  templateUrl: './support-ticket-dashboard.component.html',
  styleUrls: ['./support-ticket-dashboard.component.css']
})
export class SupportTicketDashboardComponent implements OnInit {

  constructor(private LearningService:LearningService, private ActivatedRoute: ActivatedRoute) { }
  ticketlist:any;
  search:any;
  count:any;
  id:any;
  ngOnInit(): void {
    this.GetSupportTickets();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetSupportTickets();
      }
    })
  }



  public GetSupportTickets(){
    this.LearningService.GetSupportTickets().subscribe(
      data=>{
        this.ticketlist=data.filter(x=>x.applicationName=='LMS Fashion');
        this.count=this.ticketlist.length;
      }
    )
  }


  attachmentlist:any;
  image(id:any){
    debugger
    this.LearningService.GetSupportAttachment().subscribe(
      data=>{
        debugger
       this.attachmentlist=data.filter(x=>x.ticketID==id);
      
      }
    )
    
  }



}
