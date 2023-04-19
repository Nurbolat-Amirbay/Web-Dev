import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-list',
  template: `
    <h2>Companies</h2>
    <ul>
      <li *ngFor="let company of companies" (click)="onSelect(company)">
        {{company.name}}
      </li>
    </ul>
    <app-vacancy-list *ngIf="selectedCompany" [companyId]="selectedCompany.id"></app-vacancy-list>
  `
})
export class CompanyListComponent implements OnInit {

  companies: Company[];
  selectedCompany: Company;

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

  onSelect(company: Company) {
    this.selectedCompany = company;
    this.router.navigate(['/companies', company.id]);
  }

}
