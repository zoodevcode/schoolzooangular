import { Component, OnInit } from '@angular/core';
import { SchoolYear } from '../School-year';
import { SchoolyearService } from '../schoolyear.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-schoolyear',
  templateUrl: './list-schoolyear.component.html',
  styleUrls: ['./list-schoolyear.component.css']
})
export class ListSchoolyearComponent implements OnInit{
  itemsPerPage: number = 5; // Nombre d'éléments par page
  currentPage: number = 1; // Page actuelle
  // Fonction pour mettre à jour la page actuelle lorsqu'un changement de page est déclenché
  schoolyears:SchoolYear[]=[];
  newSchoolYear: SchoolYear = {};

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  
  constructor(private service:SchoolyearService, private router:Router){}
  ngOnInit(): void {
    this.getSchoolyears();
  }

  getSchoolyears(){
    this.service.getSchoolYearList().subscribe(data=>{
      this.schoolyears=data;
    })
  }

  updateSchoolyear(id:number | undefined){
    if (id !== undefined) {
      this.router.navigate(['update-schoolyear', id]);
    }
  }

  deleteSchoolyear(id:number | undefined){
    if (id !== undefined) {
      this.service.deleteSchoolYear(id).subscribe(data => {
        this.getSchoolyears();
      });
    }
  }

  createSchoolYear() {
    this.service.createSchoolYearList(this.newSchoolYear).subscribe(data => {
      // Réinitialiser les champs du formulaire après avoir créé une nouvelle année scolaire
      this.newSchoolYear = {};
      // Mettre à jour la liste des années scolaires après la création
      this.getSchoolyears();
    });
  }
}
