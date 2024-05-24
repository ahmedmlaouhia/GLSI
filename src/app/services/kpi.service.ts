import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private apiUrl = 'http://localhost:8080/api/kpi';

  constructor(private http: HttpClient) { }

  getAverageAbsences(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/averageAbsences`);
  }

  getPassRate(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/passRate`);
  }

  getStudentsByClass(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`${this.apiUrl}/studentsByClass`);
  }

  getAbsencesByClass(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`${this.apiUrl}/absencesByClass`);
  }

  getTeachersBySubject(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`${this.apiUrl}/teachersBySubject`);
  }
}
