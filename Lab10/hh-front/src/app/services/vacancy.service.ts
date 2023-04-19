import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private apiUrl = 'http://localhost:8000/api/drf/vacancies/';

  constructor(private http: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiUrl);
  }

  getVacanciesByCompany(id: number): Observable<Vacancy[]> {
    const url = `http://localhost:8000/api/drf/companies/${id}/vacancies/`;
    return this.http.get<Vacancy[]>(url);
  }

}
