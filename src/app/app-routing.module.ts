import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // Autres routes de votre application
  { path: '',redirectTo:'students',pathMatch:'full' },
  { path: 'students', component:ListStudentComponent},
  { path: 'create-student', component:CreateStudentComponent},
  { path: 'update-student/:id', component:UpdateStudentComponent},
  { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
