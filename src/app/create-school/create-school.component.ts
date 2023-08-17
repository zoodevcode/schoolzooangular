import { Component, OnInit } from '@angular/core';
import { School } from '../School';
import { Router } from '@angular/router';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent implements OnInit{
  school:School=new School();
 

  constructor(private service:SchoolService, private router: Router){}
  ngOnInit(): void {
  }

  

  saveSchool(){
    this.service.createSchoolList(this.school).subscribe(data=>{
      this.gotoSchoolList();
    })
  }

  gotoSchoolList(){
    this.router.navigate(["/schools"]);
  }

  onSubmit(){
    this.saveSchool(); 
  }

}
