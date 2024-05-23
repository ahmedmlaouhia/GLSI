import { Injectable } from '@angular/core';
import { Teacher } from '../models/Teacher';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/api/enseignants';

  public addTeacher(Teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${this.baseUrl}/add`, Teacher);
  }

  public getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}/all`);
  }

  public deleteTeacher(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  public updateTeacher(Teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.baseUrl}/update/${Teacher.id}`, Teacher);
  }

  public getTeacherById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.baseUrl}/get/${id}`);
  }
}
