import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { TrainerComponent } from './Pages/trainer/trainer.component';
import { TrainerFormComponent } from './Pages/trainer-form/trainer-form.component';
import { TrainerCourseMappingComponent } from './Pages/trainer-course-mapping/trainer-course-mapping.component';
import { TrainerCourseMappingFormComponent } from './Pages/trainer-course-mapping-form/trainer-course-mapping-form.component';
import { CourseDashboardComponent } from './Pages/course-dashboard/course-dashboard.component';
import { ChapterDashboardComponent } from './Pages/chapter-dashboard/chapter-dashboard.component';
import { CourseComponent } from './Pages/course/course.component';
import { ChapterComponent } from './Pages/chapter/chapter.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { EmployeeFormComponent } from './Pages/employee-form/employee-form.component';
import { MyCourseDashboardComponent } from './Pages/my-course-dashboard/my-course-dashboard.component';
import { CatalogComponent } from './Pages/catalog/catalog.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { ViewCourseComponent } from './Pages/view-course/view-course.component';

import { TakeAssessmentComponent } from './Pages/take-assessment/take-assessment.component';
import { AssessmentResultComponent } from './Pages/assessment-result/assessment-result.component';
import { CourseCertificateComponent } from './Pages/course-certificate/course-certificate.component';
import { StartMyCourseComponent } from './Pages/start-my-course/start-my-course.component';
import { LearningPathDashboardComponent } from './Pages/learning-path-dashboard/learning-path-dashboard.component';
import { LearningPathDetailsComponent } from './Pages/learning-path-details/learning-path-details.component';

// import { NgxFullCalendarModule } from 'ngx-fullcalendar';
// import { NgWizardModule } from 'ng-wizard';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';
// import { NgxFullCalendarModule } from '../../node_modules/ngx-fullcalendar';
import { NgxPaginationModule } from 'ngx-pagination';
import { AssessmentdashboardComponent } from './Pages/assessmentdashboard/assessmentdashboard.component';
import { AssessmentFormComponent } from './Pages/assessment-form/assessment-form.component';
import { ManagerDashboardComponent } from './Pages/manager-dashboard/manager-dashboard.component';

//import { AngularEditorModule } from '@kolkov/angular-editor';
import { CategoryDashboardComponent } from './Pages/category-dashboard/category-dashboard.component';
import { CategoryFormComponent } from './Pages/category-form/category-form.component';
import { StaffresultComponent } from './Pages/staffresult/staffresult.component';

import { CKEditorModule } from 'ckeditor4-angular';
import { AssignCourseToEmployeeComponent } from './Pages/assign-course-to-employee/assign-course-to-employee.component';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { CheckanswerComponent } from './Pages/checkanswer/checkanswer.component';
import { SubmitedtestsComponent } from './Pages/submitedtests/submitedtests.component';
import { AssignCourseDashboardComponent } from './Pages/assign-course-dashboard/assign-course-dashboard.component';
import { AttendanceNewComponent } from './Pages/attendance-new/attendance-new.component';
import { EmployeeAssessmentResultComponent } from './Pages/employee-assessment-result/employee-assessment-result.component';
import { AssessmentDashboardnewComponent } from './assessment-dashboardnew/assessment-dashboardnew.component';
import { FinalResultComponent } from './Pages/final-result/final-result.component';
import { AssesmentDetailsComponent } from './assesment-details/assesment-details.component';
import { StartMyCourseNewComponent } from './Pages/start-my-course-new/start-my-course-new.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { TraineeReportComponent } from './Pages/trainee-report/trainee-report.component';
import { CourseCertificateNewComponent } from './Pages/course-certificate-new/course-certificate-new.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectdetailsComponent } from './subjectdetails/subjectdetails.component';
import { ClassesDashboardComponent } from './classes-dashboard/classes-dashboard.component';
import { ClassesFormComponent } from './classes-form/classes-form.component';
import { DatePipe } from '@angular/common';
import { HelpComponent } from './Pages/help/help.component';
import { SupportTicketsComponent } from './Pages/support-tickets/support-tickets.component';
import { SupportTicketDashboardComponent } from './support-ticket-dashboard/support-ticket-dashboard.component';





const ngWizardConfig: NgWizardConfig = {
  theme: THEME.circles
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    TrainerComponent,
    TrainerFormComponent,
    TrainerCourseMappingComponent,
    TrainerCourseMappingFormComponent,
    CourseDashboardComponent,
    ChapterDashboardComponent,
    CourseComponent,
    ChapterComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    MyCourseDashboardComponent,
    CatalogComponent,
    AdminDashboardComponent,
    ViewCourseComponent,
    StartMyCourseComponent,
    TakeAssessmentComponent,
    AssessmentResultComponent,
    CourseCertificateComponent,
    LearningPathDashboardComponent,
    LearningPathDetailsComponent,
    AssessmentdashboardComponent,
    AssessmentFormComponent,
    ManagerDashboardComponent,
    CategoryDashboardComponent,
    CategoryFormComponent,
    StaffresultComponent,
    AssignCourseToEmployeeComponent,
    SidebarComponent,
    CheckanswerComponent,
    SubmitedtestsComponent,
    AssignCourseDashboardComponent,
    AttendanceNewComponent,
    EmployeeAssessmentResultComponent,
    AssessmentDashboardnewComponent,
    FinalResultComponent,
    AssesmentDetailsComponent,
    StartMyCourseNewComponent,
    TraineeReportComponent,
    CourseCertificateNewComponent,
    SubjectComponent,
    SubjectdetailsComponent,
    ClassesDashboardComponent,
    ClassesFormComponent,
    HelpComponent,
    SupportTicketsComponent,
    SupportTicketDashboardComponent,

  
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    NgxDropzoneModule,
    CKEditorModule,
    PdfViewerModule,
    NgxDocViewerModule,
    // NgxFullCalendarModule,
    HttpClientModule,
    NgWizardModule.forRoot(ngWizardConfig),
    NgxPaginationModule,
   // AngularEditorModule,
   
  
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
