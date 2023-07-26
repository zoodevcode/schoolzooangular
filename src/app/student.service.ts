import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080/api/v1/students"

  constructor(private http:HttpClient){ }

  getStudentList():Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}`);
  }


  createStudentList(student:Student):Observable<Object>{
    return this.http.post<Student[]>(`${this.baseUrl}`, student); 
  }

  getStudentById(id:number):Observable<Student>{
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }

  updateStudent(id:number, student:Student):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, student);
  }
  
  deleteStudent(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getNombreStudents(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);
  }

}
