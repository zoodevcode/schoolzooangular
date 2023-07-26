import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from './app/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl = "http://localhost:8080/api/v1/teachers"

  constructor(private http:HttpClient){ }

  getTeacherList():Observable<Teacher[]>{
    return this.http.get<Teacher[]>(`${this.baseUrl}`);
  }


  createTeacherList(teacher:Teacher):Observable<Object>{
    return this.http.post<Teacher[]>(`${this.baseUrl}`, teacher); 
  }

  getTeacherById(id:number):Observable<Teacher>{
    return this.http.get<Teacher>(`${this.baseUrl}/${id}`);
  }

  updateTeacher(id:number, teacher:Teacher):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, teacher);
  }
  
  deleteTeacher(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getNombreTeachers(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);
  }

}
