import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private baseUrl = "http://localhost:8080/api/v1/subjects"

  constructor(private http:HttpClient){ }

  getSubjectList():Observable<Subject[]>{
    return this.http.get<Subject[]>(`${this.baseUrl}`);
  }


  createSubjectList(subject:Subject):Observable<Object>{
    return this.http.post<Subject[]>(`${this.baseUrl}`, subject); 
  }

  getSubjectById(id:number):Observable<Subject>{
    return this.http.get<Subject>(`${this.baseUrl}/${id}`);
  }

  updateSubject(id:number, subject:Subject):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, subject);
  }
  
  deleteSubject(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getNombreSubjects(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);
  }

  
}
