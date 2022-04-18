import { CorporateStructureModalComponent } from './../main-menu/corporate-structure-modal/corporate-structure-modal.component';
import { AssignedTasksModalComponent } from './../main-menu/assigned-tasks-modal/assigned-tasks-modal.component';
import { AssignedProjectsModalComponent } from './../main-menu/assigned-projects-modal/assigned-projects-modal.component';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  openAssignedProjectsModal() {
    const modalRef = this.modalService.open(AssignedProjectsModalComponent);
  }

  openAssignedTasksModal() {
    const modalRef = this.modalService.open(AssignedTasksModalComponent);
  }

  openCorporateStructuresModal() {
    const modalRef = this.modalService.open(CorporateStructureModalComponent);
  }
}
