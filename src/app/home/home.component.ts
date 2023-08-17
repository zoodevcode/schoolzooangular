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
import { SchoolyearService } from '../schoolyear.service';
import { SchoolYear } from '../School-year';
import { SchoolService } from '../school.service';
import { School } from '../School';
import { StudentNote } from '../StudentNote';
import { StudentNoteService } from '../student-note.service';

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
  schoolyears:SchoolYear[]=[];
  nombreSchoolYears!: number;
  schools:School[]=[];
  nombreSchools!: number;
  studentNotes:StudentNote[]=[];
  nombreStudentNotes!: number;
  
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  constructor(private service:StudentService, private service1:TeacherService, private service2:SubjectService, private service3:SchoolyearService, private service4:SchoolService, private service5:StudentNoteService, private router:Router){}
  ngOnInit(): void {  
    this.getStudents();
    this.getNombreStudents();
    this.getTeachers();
    this.getNombreTeachers();
    this.getSubjects();
    this.getNombreSubjects();
    this.getSchoolYear();
    this.getNombreSchoolYear();
    this.getSchool();
    this.getNombreSchool();
    this.getStudentNote();
    this.getNombreStudentNote();
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

  getSchoolYear(){
    this.service3.getSchoolYearList().subscribe(data=>{
      this.schoolyears=data;
    })
  }

  updateSchoolYear(id:number | undefined){
    if (id !== undefined) {
      this.router.navigate(['update-schoolyear', id]);
    }
  }

  deleteSchoolYear(id:number | undefined){
    if (id !== undefined) {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette matière ?")) {
        this.service3.deleteSchoolYear(id).subscribe(data => {
          this.getSchoolYear();
        });
      }
    }
  }

  getNombreSchoolYear(): void {
    this.service3.getNombreSchoolYear().subscribe(
      (data) => {
        this.nombreSchoolYears = data; // Assurez-vous que le service renvoie le nombre d'étudiants ici
        console.log(this.nombreSchoolYears); // Ajoutez le console.log ici
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getSchool(){
    this.service4.getSchoolList().subscribe(data=>{
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
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette école ?")) {
        this.service4.deleteSchool(id).subscribe(data => {
          this.getSchool();
        });
      }
    }
  }

  getNombreSchool(): void {
    this.service4.getNombreSchool().subscribe(
      (data) => {
        this.nombreSchools = data; // Assurez-vous que le service renvoie le nombre d'étudiants ici
        console.log(this.nombreSchools); // Ajoutez le console.log ici
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getStudentNote(){
    this.service5.getStudentNoteList().subscribe(data=>{
      this.studentNotes=data;
    })
  }

  updateStudentNote(id:number | undefined){
    if (id !== undefined) {
      this.router.navigate(['update-studentNote', id]);
    }
  }

  deleteStudentNote(id:number | undefined){
    if (id !== undefined) {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette Student ?")) {
        this.service5.deleteStudentNote(id).subscribe(data => {
          this.getStudentNote();
        });
      }
    }
  }

  getNombreStudentNote(): void {
    this.service5.getNombreStudentNotes().subscribe(
      (data) => {
        this.nombreStudentNotes = data; // Assurez-vous que le service renvoie le nombre d'étudiants ici
        console.log(this.nombreStudentNotes); // Ajoutez le console.log ici
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
