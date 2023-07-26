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
import { TeacherService } from 'src/teacher.service';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    HomeComponent,
    CreateTeacherComponent,
    ListTeacherComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [StudentService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
