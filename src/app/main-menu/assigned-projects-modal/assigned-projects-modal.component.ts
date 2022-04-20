import { LocalStorageService } from './../../services/local-storage.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from './../../shared/project.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-assigned-projects-modal',
  templateUrl: './assigned-projects-modal.component.html',
  styleUrls: ['./assigned-projects-modal.component.scss']
})
export class AssignedProjectsModalComponent implements OnInit {

  isMoreDetailsOpened: boolean = false;

  projects: Project[] = [];

  selectedProject: Project | null = null;

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService,
    private localStorageService: LocalStorageService) { }
// TODO: CHANGE ASSIGN PROJECTS SYSTEM
  ngOnInit(): void {
    if (this.userService.UserProjectsIds) {
      const projectIds = this.localStorageService.getUsersProjectsIds();

      if (projectIds) {
        const projectsIds: String[] = projectIds;
        for (let projectIdIndex = 0; projectIdIndex < projectsIds.length; projectIdIndex++) {
          this.userService.getProject(projectsIds[projectIdIndex]);
          this.projects = this.userService.projects;
        }
      }
    }
  }
}
