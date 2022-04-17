import { Employee } from 'src/app/shared/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-structure-modal',
  templateUrl: './corporate-structure-modal.component.html',
  styleUrls: ['./corporate-structure-modal.component.scss']
})
export class CorporateStructureModalComponent implements OnInit {

  employees: Employee[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
