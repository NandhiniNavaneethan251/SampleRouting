import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <p>
      Nandhini<br>Pavithra<br>Ranjith<br>Kumaran
    </p>
  `,
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
