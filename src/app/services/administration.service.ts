import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Administration } from '../models/Administration';

@Injectable({
  providedIn: 'root',
})
export class AdministrationService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8080/api/cadresAdministratifs';

  public addAdministration(cadre: Administration): Observable<Administration> {
    return this.http.post<Administration>(`${this.baseUrl}/add`, cadre);
  }

  public getCadresAdministratifs(): Observable<Administration[]> {
    return this.http.get<Administration[]>(`${this.baseUrl}/all`);
  }

  public deleteAdministration(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  public updateAdministration(
    cadre: Administration
  ): Observable<Administration> {
    return this.http.put<Administration>(
      `${this.baseUrl}/update/${cadre.id}`,
      cadre
    );
  }

  public getAdministrationById(id: number): Observable<Administration> {
    return this.http.get<Administration>(`${this.baseUrl}/get/${id}`);
  }
}
