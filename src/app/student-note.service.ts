import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentNote } from './StudentNote';

@Injectable({
  providedIn: 'root'
})
export class StudentNoteService {

  private baseUrl = "http://localhost:8080/api/v1/studentNotes"

  constructor(private http:HttpClient){ }

  getStudents(): Observable<StudentNote[]> {
    return this.http.get<StudentNote[]>(this.baseUrl);
  }

  getStudentNoteList():Observable<StudentNote[]>{
    return this.http.get<StudentNote[]>(`${this.baseUrl}`);
  }


  createStudentNoteList(studentNote:StudentNote):Observable<Object>{
    return this.http.post<StudentNote[]>(`${this.baseUrl}`, studentNote); 
  }

  getStudentNoteById(id:number):Observable<StudentNote>{
    return this.http.get<StudentNote>(`${this.baseUrl}/${id}`);
  }

  updateStudentNote(id:number, studentNote:StudentNote):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, studentNote);
  }
  
  deleteStudentNote(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getNombreStudentNotes(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);
  }
}
