import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from './School';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private baseUrl = "http://localhost:8080/api/v1/schools"

  constructor(private http:HttpClient){ }

  getSchoolList():Observable<School[]>{
    return this.http.get<School[]>(`${this.baseUrl}`);
  }


  createSchoolList(school:School):Observable<Object>{
    return this.http.post<School[]>(`${this.baseUrl}`, school); 
  }

  getSchoolById(id:number):Observable<School>{
    return this.http.get<School>(`${this.baseUrl}/${id}`);
  }

  updateSchool(id:number, school:School):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, school);
  }
  
  deleteSchool(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getNombreSchool(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);      
  }

}
