import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit{

  students:Student[]=[];
  constructor(private service:StudentService, private router:Router){}
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.service.getStudentList().subscribe(data=>{
      this.students=data;
    })
  }

  updateStudent(id:number | undefined){
    if (id !== undefined) {
      this.router.navigate(['update-student', id]);
    }
  }

  deleteStudent(id:number | undefined){
    if (id !== undefined) {
      this.service.deleteStudent(id).subscribe(data => {
        this.getStudents();
      });
    }
  }

}
