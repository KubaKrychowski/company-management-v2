import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from './../../shared/project.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-assigned-projects-modal',
  templateUrl: './assigned-projects-modal.component.html',
  styleUrls: ['./assigned-projects-modal.component.scss']
})
export class AssignedProjectsModalComponent implements OnInit {

  isMoreDetailsOpened: boolean = false;

  projects: Project[] = [
    {
      title: '1st project',
      description: 'Marketing Simulator',
      isImportant: false,
      usersIDs: []
    },

    {
      title: '2nd project',
      description: 'Company Management application',
      isImportant: true,
      usersIDs: []
    },
  ]

  selectedProject: Project | null = null;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }


}
