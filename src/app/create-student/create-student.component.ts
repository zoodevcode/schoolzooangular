import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit{


  student:Student=new Student();
 

  constructor(private service:StudentService, private router: Router){}
  ngOnInit(): void {
  }


  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  range(start: number, end: number): number[] {
    return Array.from({length: (end - start + 1)}, (_, index) => start + index);
  }
  

  saveStudent(){
    this.service.createStudentList(this.student).subscribe(data=>{
      this.gotoStudentList();
    })
  }

  gotoStudentList(){
    this.router.navigate(["/students"]);
  }

  onSubmit(){
    this.saveStudent(); 
  }

}
