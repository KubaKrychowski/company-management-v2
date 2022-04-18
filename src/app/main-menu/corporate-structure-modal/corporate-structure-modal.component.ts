import { Employee } from './../../shared/Employee.model';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-corporate-structure-modal',
  templateUrl: './corporate-structure-modal.component.html',
  styleUrls: ['./corporate-structure-modal.component.scss']
})
export class CorporateStructureModalComponent implements OnInit {

  name: string = '';
  foundEmployee: Employee | null = null;
  showAllEmployees: boolean = false;
  showEmployeeDetails: boolean = false;

  employees: Employee[] = [
    {
      name: 'Anna',
      surname: 'Nowak',
      position: 'Tester',
      salary: 10
    },

    {
      name: 'Grzegorz',
      surname: 'Kowalski',
      position: 'Back-end dev',
      salary: 60
    },

    {
      name: 'Piotr',
      surname: 'Adamski',
      position: 'Team Leader',
      salary: 30
    },
    {
      name: 'Wiktor',
      surname: 'Błaszczyk',
      position: 'Project Manager',
      salary: 43
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

  lookForEmployee() {
    const employee = this.employees.find(employee => employee.name === this.name);
    if (employee) {
      this.foundEmployee = employee;
      this.showAllEmployees = false;
    }
  }
}
