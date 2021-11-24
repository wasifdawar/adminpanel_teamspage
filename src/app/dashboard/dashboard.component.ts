import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  icon: string;
  email: string;
  title: string;
  sub: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    icon: '/assets/avatar1.jpg',
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    title: 'Regional Paradigm Technician',
    sub: 'Optimization',
  },
  {
    icon: '/assets/Cody.svg',
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    title: 'Product Directives Officer',
    sub: 'Intranet',
  },
  {
    icon: '/assets/Esther.svg',
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    title: 'Forward Response Developer',
    sub: 'Directives',
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  displayedColumns: string[] = ['name', 'title', 'action'];
  dataSource = ELEMENT_DATA;
}
