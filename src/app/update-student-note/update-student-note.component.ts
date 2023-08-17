import { Component, OnInit } from '@angular/core';
import { StudentNote } from '../StudentNote';
import { StudentNoteService } from '../student-note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { Subject } from '../subject';

@Component({
  selector: 'app-update-student-note',
  templateUrl: './update-student-note.component.html',
  styleUrls: ['./update-student-note.component.css']
})
export class UpdateStudentNoteComponent implements OnInit{
  id :number | undefined;
  studentNote: StudentNote=new StudentNote();
  student : Student[] = [];
  subject: Subject[] = [];

  constructor(private service: StudentNoteService, private route:ActivatedRoute, private router:Router){

  }
  
  ngOnInit(): void {
    this.id=Number(this.route.snapshot.params['id']);
    this.service.getStudentNoteById(this.id).subscribe(data=>{
      console.log(data);
      this.studentNote=data;
      console.log(this.studentNote);
    });
  }
  
  onSubmit(){
    if (this.id !== undefined) {
      this.service.updateStudentNote(this.id, this.studentNote).subscribe(data=>{
        this.gotoStudentNoteList();
      });
    }else {
      // Handle the case when the ID is undefined
      console.log('ID is undefined. Cannot update school.');
    }
  }

  gotoStudentNoteList() {
    this.router.navigate(['/schools']);
  }
}
