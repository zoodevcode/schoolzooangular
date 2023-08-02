import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})
export class HomeComponent implements OnInit{

  nombreStudents!: number;
  students:Student[]=[];
  nombreTeachers!: number;
  teachers:Teacher[]=[];
  nombreSubjects!: number;
  subjects:Subject[]=[];
  itemsPerPage: number = 5; // Nombre d'éléments par page
  currentPage: number = 1; // Page actuelle
  filteredStudents: Student[] = [];
  filterText: string = '';
  
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  constructor(private service:StudentService, private service1:TeacherService, private service2:SubjectService, private router:Router){}
  ngOnInit(): void {  
    this.getStudents();
    this.getNombreStudents();
    this.getTeachers();
    this.getNombreTeachers();
    this.getSubjects();
    this.getNombreSubjects();
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

  getNombreStudents(): void {
    this.service.getNombreStudents().subscribe(
      (data) => {
        this.nombreStudents = data; // Assurez-vous que le service renvoie le nombre d'étudiants ici
        console.log(this.nombreStudents); // Ajoutez le console.log ici
      },
      (error) => {
        console.error(error);
      }
    );
  }


  getTeachers(){
    this.service1.getTeacherList().subscribe(data=>{
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
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cet professeur ?")) {
        this.service1.deleteTeacher(id).subscribe(data => {
          this.getTeachers();
        });
      }
    }
  }

  getNombreTeachers(): void {
    this.service1.getNombreTeachers().subscribe(
      (data) => {
        this.nombreTeachers = data; // Assurez-vous que le service renvoie le nombre d'étudiants ici
        console.log(this.nombreTeachers); // Ajoutez le console.log ici
      },
      (error) => {
        console.error(error);
      }
    );
  }


  getSubjects(){
    this.service2.getSubjectList().subscribe(data=>{
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
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette matière ?")) {
        this.service2.deleteSubject(id).subscribe(data => {
          this.getSubjects();
        });
      }
    }
  }

  getNombreSubjects(): void {
    this.service2.getNombreSubjects().subscribe(
      (data) => {
        this.nombreSubjects = data; // Assurez-vous que le service renvoie le nombre d'étudiants ici
        console.log(this.nombreSubjects); // Ajoutez le console.log ici
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
