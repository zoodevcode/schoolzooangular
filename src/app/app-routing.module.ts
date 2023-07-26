import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HomeComponent } from './home/home.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';

const routes: Routes = [
  // Autres routes de votre application
  { path: '',redirectTo:'home',pathMatch:'full' },
  { path: 'students', component:ListStudentComponent},
  { path: 'teachers', component:ListTeacherComponent},
  { path: 'subjects', component:ListSubjectComponent},
  { path: 'create-student', component:CreateStudentComponent},
  { path: 'update-student/:id', component:UpdateStudentComponent},
  { path: 'home', component: HomeComponent },
  { path: 'create-teacher', component: CreateTeacherComponent },
  { path: 'list-teacher', component: ListTeacherComponent },
  { path: 'create-subject', component: CreateSubjectComponent },
  { path: 'list-subject', component: ListSubjectComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
