import { Project } from './../../shared/project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigned-projects-modal',
  templateUrl: './assigned-projects-modal.component.html',
  styleUrls: ['./assigned-projects-modal.component.scss']
})
export class AssignedProjectsModalComponent implements OnInit {

  projects: Project[] = [
    {
      title: '1st project',
      description: 'Marketing Simulator',
      isImportant: false,
    },

    {
      title: '2nd project',
      description: 'Company Management application',
      isImportant: true,
    },
  ]

  selectedProject: Project | null = null;

  constructor() { }

  ngOnInit(): void {
  }


}
