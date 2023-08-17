import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SchoolYear } from './School-year';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolyearService {

  private baseUrl = "http://localhost:8080/api/v1/schoolyears"

  constructor(private http:HttpClient){ }

  getSchoolYearList():Observable<SchoolYear[]>{
    return this.http.get<SchoolYear[]>(`${this.baseUrl}`);
  }


  createSchoolYearList(schoolyear:SchoolYear):Observable<Object>{
    return this.http.post<SchoolYear[]>(`${this.baseUrl}`, schoolyear); 
  }

  getSchoolYearById(id:number):Observable<SchoolYear>{
    return this.http.get<SchoolYear>(`${this.baseUrl}/${id}`);
  }

  updateSchoolyear(id:number, schoolyear:SchoolYear):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, schoolyear);
  }
  
  deleteSchoolYear(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getNombreSchoolYear(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);      
  }

}
