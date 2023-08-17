import { Component, OnInit } from '@angular/core';
import { SchoolYear } from '../School-year';
import { SchoolyearService } from '../schoolyear.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-schoolyear',
  templateUrl: './create-schoolyear.component.html',
  styleUrls: ['./create-schoolyear.component.css']
})
export class CreateSchoolyearComponent implements OnInit{

  schoolyear:SchoolYear=new SchoolYear();
 

  constructor(private service:SchoolyearService, private router: Router){}
  ngOnInit(): void {
  }

  

  saveSchoolYear(){
    this.service.createSchoolYearList(this.schoolyear).subscribe(data=>{
      this.gotoSchoolYearList();
    })
  }

  gotoSchoolYearList(){
    this.router.navigate(["/schoolyears"]);
  }

  onSubmit(){
    this.saveSchoolYear(); 
  }



}
