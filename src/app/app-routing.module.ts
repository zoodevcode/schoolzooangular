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
import { CreateSchoolyearComponent } from './create-schoolyear/create-schoolyear.component';
import { ListSchoolyearComponent } from './list-schoolyear/list-schoolyear.component';
import { UpdateSchoolyearComponent } from './update-schoolyear/update-schoolyear.component';
import { ListSchoolComponent } from './list-school/list-school.component';
import { CreateSchoolComponent } from './create-school/create-school.component';
import { UpdateSchoolComponent } from './update-school/update-school.component';
import { ListStudentNoteComponent } from './list-student-note/list-student-note.component';
import { CreateStudentNoteComponent } from './create-student-note/create-student-note.component';
import { UpdateStudentNoteComponent } from './update-student-note/update-student-note.component';

const routes: Routes = [
  // Autres routes de votre application
  { path: '',redirectTo:'home',pathMatch:'full' },
  { path: 'students', component:ListStudentComponent},
  { path: 'teachers', component:ListTeacherComponent},
  { path: 'subjects', component:ListSubjectComponent},
  { path: 'schoolyears', component:ListSchoolyearComponent},
  { path: 'create-student', component:CreateStudentComponent},
  { path: 'update-student/:id', component:UpdateStudentComponent},
  { path: 'update-schoolyear/:id', component:UpdateSchoolyearComponent},
  { path: 'home', component: HomeComponent },
  { path: 'create-teacher', component: CreateTeacherComponent },
  { path: 'list-teacher', component: ListTeacherComponent },
  { path: 'create-subject', component: CreateSubjectComponent },
  { path: 'list-subject', component: ListSubjectComponent },
  { path: 'create-schoolyear', component: CreateSchoolyearComponent },
  { path: 'list-schoolyear', component: ListSchoolyearComponent },
  { path: 'schools', component: ListSchoolComponent },
  { path: 'list-school', component: ListSchoolComponent },
  { path: 'create-school', component: CreateSchoolComponent },
  { path: 'update-school/:id', component:UpdateSchoolComponent},
  { path: 'studentNotes', component: ListStudentNoteComponent },
  { path: 'list-studentNote', component: ListStudentNoteComponent },
  { path: 'create-studentNote', component: CreateStudentNoteComponent },
  { path: 'update-studentNote/:id', component:UpdateStudentNoteComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
