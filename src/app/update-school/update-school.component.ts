import { Component, OnInit } from '@angular/core';
import { School } from '../School';
import { SchoolService } from '../school.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent implements OnInit{

  id :number | undefined;
  school: School=new School();

  constructor(private service: SchoolService, private route:ActivatedRoute, private router:Router){

  }
  
  ngOnInit(): void {
    this.id=Number(this.route.snapshot.params['id']);
    this.service.getSchoolById(this.id).subscribe(data=>{
      this.school=data;
    });
  }
  
  onSubmit(){
    if (this.id !== undefined) {
      this.service.updateSchool(this.id, this.school).subscribe(data=>{
        this.gotoSchoolList();
      });
    }else {
      // Handle the case when the ID is undefined
      console.log('ID is undefined. Cannot update school.');
    }
  }

  gotoSchoolList() {
    this.router.navigate(['/schools']);
  }


}
