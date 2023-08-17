import { Component, OnInit } from '@angular/core';
import { StudentNote } from '../StudentNote';
import { StudentNoteService } from '../student-note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student-note',
  templateUrl: './list-student-note.component.html',
  styleUrls: ['./list-student-note.component.css']
})
export class ListStudentNoteComponent implements OnInit{

  itemsPerPage: number = 5; // Nombre d'éléments par page
  currentPage: number = 1; // Page actuelle
  // Fonction pour mettre à jour la page actuelle lorsqu'un changement de page est déclenché
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  studentNotes:StudentNote[]=[];
  constructor(private service:StudentNoteService, private router:Router){}
  ngOnInit(): void {
    this.getStudentNotes();
  }

  getStudentNotes(){
    this.service.getStudentNoteList().subscribe(data=>{
      this.studentNotes=data;
    })
  }

  updateStudentNote(id:number | undefined){
    if (id !== undefined) {
      this.router.navigate(['update-studentNote', id]);
    }
  }

  deleteStudentNote(id:number | undefined){
    if (id !== undefined) {
      this.service.deleteStudentNote(id).subscribe(data => {
        this.getStudentNotes();
      });
    }
  }

}
