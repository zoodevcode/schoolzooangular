import { Component, OnInit } from '@angular/core';
import { StudentNote } from '../StudentNote';
import { StudentNoteService } from '../student-note.service';
import { Router } from '@angular/router';
import { Student } from '../student';
import { Subject } from '../subject';

@Component({
  selector: 'app-create-student-note',
  templateUrl: './create-student-note.component.html',
  styleUrls: ['./create-student-note.component.css']
})
export class CreateStudentNoteComponent implements OnInit{

  studentNote: StudentNote = {
    student: {},
    subject: {}
  };
  students : Student[] = [];
  subjects: Subject[] = [];
  // selectedStudentId: number | undefined;
  // selectedSubjectId: number | undefined;

 

  constructor(private service:StudentNoteService, private router: Router){}
  ngOnInit(): void {
  }

  

  saveStudentNote(){
    this.service.createStudentNoteList(this.studentNote).subscribe(data=>{
      this.gotoStudentNoteList();
    })
  }

  gotoStudentNoteList(){
    this.router.navigate(["/studentNotes"]);
  }

  onSubmit(){
   this.saveStudentNote(); 
  }

  // onSubmit() {
  //   if (this.selectedStudentId && this.selectedSubjectId) {
  //     this.studentNote.student = { id: this.selectedStudentId };
  //     this.studentNote.subject = { id: this.selectedSubjectId };

  //     this.service.createStudentNoteList(this.studentNote).subscribe(data => {
  //       // Handle success or error
  //     });
  //   } else {
  //     console.log('Selected student or subject is missing.');
  //   }
  // }
}
