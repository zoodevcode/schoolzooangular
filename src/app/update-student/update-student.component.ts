import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{
  id :number | undefined;
  student: Student=new Student();
  constructor(private service: StudentService, private route:ActivatedRoute, private router:Router){

  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  range(start: number, end: number): number[] {
    return Array.from({length: (end - start + 1)}, (_, index) => start + index);
  }
  
  ngOnInit(): void {
    this.id=Number(this.route.snapshot.params['id']);
    this.service.getStudentById(this.id).subscribe(data=>{
      this.student=data;
    });
  }
  
  onSubmit(){
    if (this.id !== undefined) {
      this.service.updateStudent(this.id, this.student).subscribe(data=>{
        this.gotoStudentList();
      });
    }else {
      // Handle the case when the ID is undefined
      console.log('ID is undefined. Cannot update student.');
    }
  }

  gotoStudentList() {
    this.router.navigate(['/students']);
  }

}
