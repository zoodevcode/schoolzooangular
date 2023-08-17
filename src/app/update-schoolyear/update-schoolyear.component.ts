import { Component, OnInit } from '@angular/core';
import { SchoolYear } from '../School-year';
import { SchoolyearService } from '../schoolyear.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-schoolyear',
  templateUrl: './update-schoolyear.component.html',
  styleUrls: ['./update-schoolyear.component.css']
})
export class UpdateSchoolyearComponent implements OnInit{

  id :number | undefined;
  //schoolyear: SchoolYear=new SchoolYear();
  schoolyear: SchoolYear = {
    startDate: new Date(), // Initialisez avec une date par défaut si nécessaire
    endDate: new Date()    // Initialisez avec une date par défaut si nécessaire
  };

  formattedStartDate: string | undefined;
  formattedEndDate: string | undefined;

  constructor(private service: SchoolyearService, private route:ActivatedRoute, private router:Router, private datePipe: DatePipe){

  }
  
  ngOnInit(): void {
    this.id=Number(this.route.snapshot.params['id']);
    this.service.getSchoolYearById(this.id).subscribe(data=>{
      this.schoolyear.id = data.id;
      this.schoolyear.nameSchoolYear = data.nameSchoolYear;
      if (data.startDate) {
        this.schoolyear.startDate = new Date(data.startDate);
      } else {
        this.schoolyear.startDate = new Date(); // Ou une autre valeur par défaut si nécessaire
      }
      if (data.endDate) {
        this.schoolyear.endDate = new Date(data.endDate);
      } else {
        this.schoolyear.endDate = new Date(); // Ou une autre valeur par défaut si nécessaire
      }

      this.formattedStartDate = this.datePipe.transform(this.schoolyear.startDate, 'yyyy-MM-dd')!;
      this.formattedEndDate = this.datePipe.transform(this.schoolyear.endDate, 'yyyy-MM-dd')!;
    });
  }
  
  onSubmit(){
    if (this.id !== undefined) {
      this.service.updateSchoolyear(this.id, this.schoolyear).subscribe(data=>{
        this.gotoSchoolYearList();
      });
    }else {
      // Handle the case when the ID is undefined
      console.log('ID is undefined. Cannot update school year.');
    }
  }

  gotoSchoolYearList() {
    this.router.navigate(['/schoolyears']);
  }


}
