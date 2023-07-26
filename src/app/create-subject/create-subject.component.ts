import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit{

  subject:Subject=new Subject();
 

  constructor(private service:SubjectService, private router: Router){}
  ngOnInit(): void {
  }
  

  saveSubject(){
    this.service.createSubjectList(this.subject).subscribe(data=>{
      this.gotoSubjectList();
    })
  }

  gotoSubjectList(){
    this.router.navigate(["/subjects"]);
  }

  onSubmit(){
    this.saveSubject(); 
  }

}
