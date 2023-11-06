import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }
  salesPersonList : SalesPerson[] = [
    new SalesPerson("Freddie", "Mercury", "freddie@gmail.com", 200),
    new SalesPerson("Brian", "May", "brian@gmail.com", 300),
    new SalesPerson("Roger","Taylor","roger@gmail.com", 400),
    new SalesPerson("Jhon", "Deacon", "jhon@gmail.com", 500)
  ];

  ngOnInit(): void {
  }

}
