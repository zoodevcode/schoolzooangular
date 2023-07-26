import { Component } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent {
  teacher:Teacher=new Teacher();
 

  constructor(private service:TeacherService, private router: Router){}
  ngOnInit(): void {
  }

  

  saveTeacher(){
    this.service.createTeacherList(this.teacher).subscribe(data=>{
      this.gotoTeacherList();
    })
  }

  gotoTeacherList(){
    this.router.navigate(["/teachers"]);
  }

  onSubmit(){
    this.saveTeacher(); 
  }
}
