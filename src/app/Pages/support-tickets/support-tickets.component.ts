import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-support-tickets',
  templateUrl: './support-tickets.component.html',
  styleUrls: ['./support-tickets.component.css']
})
export class SupportTicketsComponent implements OnInit {

  constructor(private LearningService: LearningService) { }

  date: any;
  time: any;
  typeofissue: any;
  prority: any;
  screenShot:any=[]
  comments: any;
  status: any;
  companyname: any;
  applicationName: any;
  ngOnInit(): void {
  }



  files: File[] = [];
  onSelect(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files.push(event.addedFiles[0]);

    console.log("content", this.files);
    this.AttachmentsUpload()
  }


  AttachmentsUpload() {
    this.LearningService.AttachmentsUploadsss(this.files).subscribe(data => {
      debugger
      this.screenShot.push(data);
    })
  }

  onRemove(event: any) {
    debugger
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  save() {
    debugger
    var entity = {
      "Date": this.date,
      "Time": this.time,
      "TypeOfApplicationIssues": this.typeofissue,
      "Priority": this.prority,
      "ScreenShot": this.screenShot[0],
      "Comment": this.comments,
      "Status": this.status,
      "Companyname": this.companyname,
      "ApplicationName": this.applicationName
    }
    this.LearningService.InsertSupportTickets(entity).subscribe(
      data => {
        this.ticketid = data;
        this.uploadmultipleimages()
        Swal.fire("Saved Sucessfully");

      }
    )
  }
  ticketid: any
  public uploadmultipleimages() {
      debugger
    for (let i = 0; this.screenShot.length; i++) {
      var entity = {
        "Attachment": this.screenShot[i],
        "TicketID": this.ticketid,
      }
      this.LearningService.InsertAttachment(entity).subscribe(
        data => {
          Swal.fire("Uploaded Successfully");

        }
      )
    }


  }







}
