import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit{

  itemsPerPage: number = 5; // Nombre d'éléments par page
  currentPage: number = 1; // Page actuelle
  // Fonction pour mettre à jour la page actuelle lorsqu'un changement de page est déclenché
  teachers:Teacher[]=[];

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  
  constructor(private service:TeacherService, private router:Router){}
  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(){
    this.service.getTeacherList().subscribe(data=>{
      this.teachers=data;
    })
  }

  updateTeacher(id:number | undefined){
    if (id !== undefined) {
      this.router.navigate(['update-teacher', id]);
    }
  }

  deleteTeacher(id:number | undefined){
    if (id !== undefined) {
      this.service.deleteTeacher(id).subscribe(data => {
        this.getTeachers();
      });
    }
  }

}
