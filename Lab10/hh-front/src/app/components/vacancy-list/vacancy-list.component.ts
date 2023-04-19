import { Component, Input, OnInit } from '@angular/core';
import { Vacancy } from 'src/app/models/vacancy';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  template: `
    <h2>Vacancies for {{companyName}}</h2>
    <ul>
      <li *ngFor="let vacancy of vacancies">
        {{vacancy.name}} - {{vacancy.salary}}
      </li>
    </ul>
  `
})
export class VacancyListComponent implements OnInit {

  @Input() companyId: number;
  vacancies: Vacancy[];
  companyName: string;

  constructor(private vacancyService: VacancyService) { }

  ngOnInit() {
    this.vacancyService.getVacanciesByCompany(this.companyId).subscribe(vacancies => {
      this.vacancies = vacancies;
      this.companyName = vacancies[0]?.company.name;
    });
  }

}
