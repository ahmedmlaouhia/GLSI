import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root',
  
})
export class StudentsService {
  private baseUrl = 'http://localhost:8080/api/etudiants';

  constructor(private http: HttpClient) {}

  public addEtudiant(etudiant: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/add`, etudiant);
  }

  public getUserDetails(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/all`);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${userId}`);
  }

  public updateUser(user: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/update/${user.id}`, user);
  }

  public getUserById(userId: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/get/${userId}`);
  }
}
