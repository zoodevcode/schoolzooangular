import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Student } from './student';
import { StudentService } from './student.service';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { TeacherService } from './teacher.service';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { SubjectService } from './subject.service';
import { FilterPipe } from './filter.pipe';
import { CreateSchoolyearComponent } from './create-schoolyear/create-schoolyear.component';
import { ListSchoolyearComponent } from './list-schoolyear/list-schoolyear.component';
import { SchoolyearService } from './schoolyear.service';
import { UpdateSchoolyearComponent } from './update-schoolyear/update-schoolyear.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { CommonModule, DatePipe } from '@angular/common';
import { UpdateSchoolComponent } from './update-school/update-school.component';
import { CreateSchoolComponent } from './create-school/create-school.component';
import { ListSchoolComponent } from './list-school/list-school.component';
import { SchoolService } from './school.service';
import { ListStudentNoteComponent } from './list-student-note/list-student-note.component';
import { CreateStudentNoteComponent } from './create-student-note/create-student-note.component';
import { UpdateStudentNoteComponent } from './update-student-note/update-student-note.component';
import { StudentNoteService } from './student-note.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    HomeComponent,
    CreateTeacherComponent,
    ListTeacherComponent,
    ListSubjectComponent,
    CreateSubjectComponent,
    FilterPipe,
    CreateSchoolyearComponent,
    ListSchoolyearComponent,
    UpdateSchoolyearComponent,
    UpdateTeacherComponent,
    UpdateSubjectComponent,
    UpdateSchoolComponent,
    CreateSchoolComponent,
    ListSchoolComponent,
    ListStudentNoteComponent,
    CreateStudentNoteComponent,
    UpdateStudentNoteComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    CommonModule,
  ], 
  providers: [StudentService, TeacherService, SubjectService, SchoolyearService, DatePipe, SchoolService, StudentNoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
