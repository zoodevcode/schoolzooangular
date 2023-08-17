import { Component, OnInit } from '@angular/core';
import { School } from '../School';
import { SchoolService } from '../school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-school',
  templateUrl: './list-school.component.html',
  styleUrls: ['./list-school.component.css']
})
export class ListSchoolComponent implements OnInit{

  itemsPerPage: number = 5; // Nombre d'éléments par page
  currentPage: number = 1; // Page actuelle
  // Fonction pour mettre à jour la page actuelle lorsqu'un changement de page est déclenché
  schools:School[]=[];
  newSchool: School = {};

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  
  constructor(private service:SchoolService, private router:Router){}
  ngOnInit(): void {
    this.getSchools();
  }

  getSchools(){
    this.service.getSchoolList().subscribe(data=>{
      this.schools=data;
    })
  }

  updateSchool(id:number | undefined){
    if (id !== undefined) {
      this.router.navigate(['update-school', id]);
    }
  }

  deleteSchool(id:number | undefined){
    if (id !== undefined) {
      this.service.deleteSchool(id).subscribe(data => {
        this.getSchools();
      });
    }
  }

  createSchool() {
    this.service.createSchoolList(this.newSchool).subscribe(data => {
      // Réinitialiser les champs du formulaire après avoir créé une nouvelle année scolaire
      this.newSchool = {};
      // Mettre à jour la liste des années scolaires après la création
      this.getSchools();
    });
  }

}
