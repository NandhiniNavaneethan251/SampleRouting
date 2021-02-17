import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      Production<br>Support<br>Quality Analysis <br>HR
    </p>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
