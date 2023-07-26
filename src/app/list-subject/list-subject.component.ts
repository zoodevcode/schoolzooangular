import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit{

  itemsPerPage: number = 5; // Nombre d'éléments par page
  currentPage: number = 1; // Page actuelle
  // Fonction pour mettre à jour la page actuelle lorsqu'un changement de page est déclenché
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  subjects:Subject[]=[];
  constructor(private service:SubjectService, private router:Router){}
  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects(){
    this.service.getSubjectList().subscribe(data=>{
      this.subjects=data;
    })
  }

  updateSubject(id:number | undefined){
    if (id !== undefined) {
      this.router.navigate(['update-subject', id]);
    }
  }

  deleteSubject(id:number | undefined){
    if (id !== undefined) {
      this.service.deleteSubject(id).subscribe(data => {
        this.getSubjects();
      });
    }
  }

}
