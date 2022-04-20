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

  toggleMoreDetails: boolean = false;

  projects: Project[] | null = null;
  selectedProject: Project | null = null;
  projectsIds: String[] | null = null;

  constructor(public activeModal: NgbActiveModal, private userService: UserService) {
    if (!this.projectsIds) {
      this.projectsIds = this.userService.UserProjectsIds;
    }
  }

  ngOnInit(): void {
    if (this.projectsIds) {
      for (let projectIdIndex = 0; projectIdIndex < this.projectsIds.length; projectIdIndex++) {
        const projectId = this.projectsIds[projectIdIndex];

        this.userService.getUserProject(projectId);
      }
      this.projects = this.userService.projects;
    } else {
      console.log('User has no assigned projects');
    }
  }
}
