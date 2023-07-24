import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})
export class HomeComponent implements OnInit{
  students:Student[]=[];
  itemsPerPage: number = 5; // Nombre d'éléments par page
  currentPage: number = 1; // Page actuelle

  // Fonction pour mettre à jour la page actuelle lorsqu'un changement de page est déclenché
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
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
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?")) {
        this.service.deleteStudent(id).subscribe(data => {
          this.getStudents();
        });
      }
    }
  }


}
