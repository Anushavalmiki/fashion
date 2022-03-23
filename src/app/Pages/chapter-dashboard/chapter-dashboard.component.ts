import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';

@Component({
  selector: 'app-chapter-dashboard',
  templateUrl: './chapter-dashboard.component.html',
  styleUrls: ['./chapter-dashboard.component.css']
})
export class ChapterDashboardComponent implements OnInit {
  coursedetails: any;
  search: any;

  constructor(private LearningService: LearningService) { }
  courselist: any;
  userid: any;
  roleid: any;
  ngOnInit(): void {
    this.userid = sessionStorage.getItem('userid');
    this.roleid = sessionStorage.getItem('roleid');
    this.GetChapter();
    this.GetCourse();
 
    this.GetSubjectMaster();
    this.subjectid="";
  }

  public GetCourse() {
    debugger
    this.LearningService.GetTrainerCourseMapping().subscribe(
      data => {
        debugger
        if(this.roleid==4){
          this.courselist = data.filter(x=>x.trainerID==this.userid);;
        }
        else{
          this.courselist = data;
        }
        
      })
  }

  dummcoursedetails: any;
  id: any;
  courseName: any;
  name: any;
  description: any;
  chapterPhoto: any;
  chapterText: any;
  chapterList:any;

  public GetChapter() {
    debugger
    this.LearningService.GetChapter().subscribe(data => {
      debugger
      if(this.roleid==4)
      {
        this.coursedetails = data;
        this.coursedetails = data.filter(x=>x.trainerID==this.userid);
      }
      else{
        this.coursedetails = data;
        console.log("courselist",this.chapterList)
        this.dummcoursedetails = data;
      }
 


    })
  }

  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  public PreviewVideo() {
    window.open('assets/Images/Java_Course.mp4')
  }

  public PreviewPPT() {
    window.open('assets/Images/JAVA_PPT.ppt')
  }

  edit(id: any) {
    debugger
    location.href = "#/Chapter/" + id;
  }




  public Ondelete(ID: any) {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to delete it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.LearningService.DeleteChapter(ID).subscribe(data => {
          debugger
          Swal.fire('Deleted Successfully')
          location.reload();
        })
      }
    })
  }


  Attachmentlist: any;

  ShowAttachments(id: any) {
    debugger
    this.LearningService.GetChapterAttachmentByChapterID(id).subscribe(data => {
      debugger
      this.Attachmentlist = data;
    })
  }

  openAttchments(photo: any) {
    window.open(photo, "_blank")
  }



  

  courseid:any;
  getcourseid(even: any) {
    this.courseid = even.target.value;
    if (even.target.value != 0) {
      this.coursedetails = this.dummcoursedetails.filter((x: { courseID: any; }) => x.courseID == this.courseid)
    }
    else{
      this.GetChapter();
    }
  }

  subjectlist:any;
  dummnsubjectlist:any;
  public GetSubjectMaster(){
     this.LearningService.GetSubjectMaster().subscribe(
       data=>{
         this.subjectlist=data; 
         this.dummnsubjectlist=data;  

       }
     )
  }
 
  subjectid:any;
  dumcoursedetails:any;
  getsubjectid(event:any){
    this.subjectid=event.target.value;
    if (event.target.value != 0) {
      this.coursedetails = this.dummcoursedetails.filter((x: { subjectID: any; }) => x.subjectID == this.subjectid)
    }
    else{
      this.GetChapter();
    }
  }






  photo:any;
  Showimage(chapterPhoto:any){
    this.photo=chapterPhoto;
  }

  view(desc:any){
    this.description=desc;
    
  }

  

}
