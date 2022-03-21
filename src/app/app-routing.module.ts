import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './Pages/course/course.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { HeaderComponent } from './Pages/header/header.component';
import { LoginComponent } from './Pages/login/login.component';
import { TrainerCourseMappingFormComponent } from './Pages/trainer-course-mapping-form/trainer-course-mapping-form.component';
import { TrainerCourseMappingComponent } from './Pages/trainer-course-mapping/trainer-course-mapping.component';
import { ChapterComponent } from './Pages/chapter/chapter.component'
import { TrainerFormComponent } from './Pages/trainer-form/trainer-form.component';
import { TrainerComponent } from './Pages/trainer/trainer.component';
import { CourseDashboardComponent } from './Pages/course-dashboard/course-dashboard.component';
import { ChapterDashboardComponent } from './Pages/chapter-dashboard/chapter-dashboard.component'
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
import { AssessmentdashboardComponent } from './Pages/assessmentdashboard/assessmentdashboard.component';
import { AssessmentFormComponent } from './Pages/assessment-form/assessment-form.component';
import { ManagerDashboardComponent } from './Pages/manager-dashboard/manager-dashboard.component';
import { CategoryDashboardComponent } from './Pages/category-dashboard/category-dashboard.component';
import { CategoryFormComponent } from './Pages/category-form/category-form.component';
import { StaffresultComponent } from './Pages/staffresult/staffresult.component';
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
import { TraineeReportComponent } from './Pages/trainee-report/trainee-report.component';
import { CourseCertificateNewComponent } from './Pages/course-certificate-new/course-certificate-new.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectdetailsComponent } from './subjectdetails/subjectdetails.component';

import { ClassesDashboardComponent } from './classes-dashboard/classes-dashboard.component';
import { ClassesFormComponent } from './classes-form/classes-form.component';



const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },

  { path: 'Login', component: LoginComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'Course', component: CourseComponent },
  { path: 'Course/:id', component: CourseComponent },
  { path: 'Chapter', component: ChapterComponent },
  { path: 'Chapter/:id', component: ChapterComponent },
  { path: 'Employee', component: EmployeeComponent },
  { path: 'EmployeeForm', component: EmployeeFormComponent },
  { path: 'Catalog', component: CatalogComponent },
  { path: 'Trainer', component: TrainerComponent },
  { path: 'TrainerForm', component: TrainerFormComponent },
  { path: 'TrainerForm/:id', component: TrainerFormComponent },
  { path: 'TrainerCourseMapping', component: TrainerCourseMappingComponent },
  { path: 'TrainerCourseMappingForm', component: TrainerCourseMappingFormComponent },
  { path: 'TrainerCourseMappingForm/:id', component: TrainerCourseMappingFormComponent },
  { path: 'CourseDashboard', component: CourseDashboardComponent },
  { path: 'ChapterDashboard', component: ChapterDashboardComponent },
  { path: 'AdminDashboard', component: AdminDashboardComponent },
  { path: 'ViewCourse', component: ViewCourseComponent },
  { path: 'ViewCourse/:id', component: ViewCourseComponent },
  { path: 'MyCourseDashboard', component: MyCourseDashboardComponent },
  { path: 'TakeAssessment', component: TakeAssessmentComponent },
  { path: 'TakeAssessment/:courseid/:chapterid', component: TakeAssessmentComponent },
  { path: 'AssessmentResult/:id', component: AssessmentResultComponent },
  { path: 'CourseCertificate', component: CourseCertificateComponent },
  { path: 'StartMyCourse', component: StartMyCourseComponent },
  { path: 'StartMyCourse/:id', component: StartMyCourseComponent },
  { path: 'LearningPathDashboard', component: LearningPathDashboardComponent },
  { path: 'LearningPathDetails', component: LearningPathDetailsComponent },
  { path: 'Assessmentdashboard', component: AssessmentdashboardComponent },
  { path: 'AssessmentForm', component: AssessmentFormComponent },
  { path: 'ManagerDashboard', component: ManagerDashboardComponent },
  { path: 'CategoryDashboard', component: CategoryDashboardComponent },
  { path: 'CategoryForm', component: CategoryFormComponent },
  { path: 'CategoryForm/:id', component: CategoryFormComponent },
  { path: 'Staffresult', component: StaffresultComponent },
  { path: 'AssignCourseToEmployee', component: AssignCourseToEmployeeComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'Checkanswer/:id', component: CheckanswerComponent },
  { path: 'Checkanswer', component: CheckanswerComponent },
  { path: 'Submitedtests', component: SubmitedtestsComponent },
  { path: 'AssignCourseDashboard', component: AssignCourseDashboardComponent },
  {path:'AttendanceNew',component:AttendanceNewComponent},
  {path:'EmployeeAssessmentResult',component:EmployeeAssessmentResultComponent},
  {path:'AssessmentDashboardnew',component: AssessmentDashboardnewComponent},
  {path:'FinalResult',component:FinalResultComponent},
  {path:'AssesmentDetails',component:AssesmentDetailsComponent},
  {path:'StartMyCourseNew/:id',component:StartMyCourseNewComponent},
  {path:'CourseCertificate/:id',component:CourseCertificateComponent},
  {path:'TraineeReport',component: TraineeReportComponent},
  {path:'CourseCertificateNew/:id',component:CourseCertificateNewComponent},
  {path:'Subject',component:SubjectComponent},
  {path:'Subjectdetails',component:SubjectdetailsComponent},
  {path:'ClassesDashboard',component:ClassesDashboardComponent},
  {path:'ClassesForm',component:ClassesFormComponent},
  {path:'ClassesForm/:id',component:ClassesFormComponent}

 




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
