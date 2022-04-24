import { ProfileCreatorModalComponent } from './../home/profile-creator-modal/profile-creator-modal.component';
import { UserService } from './../services/user.service';
import { CorporateStructureModalComponent } from './../main-menu/corporate-structure-modal/corporate-structure-modal.component';
import { AssignedTasksModalComponent } from './../main-menu/assigned-tasks-modal/assigned-tasks-modal.component';
import { AssignedProjectsModalComponent } from './../main-menu/assigned-projects-modal/assigned-projects-modal.component';
import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserSettingsModalComponent } from '../user-settings-modal/user-settings-modal.component';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent {

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    public userService: UserService) {
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

  openUserSettingsModal() {
    const modalRef = this.modalService.open(UserSettingsModalComponent, { size: 'xl' });
  }
}
