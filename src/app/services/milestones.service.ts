import { Milestone } from './../shared/milestone.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MilestonesService {

  milestones: Milestone[] = [
    {
      title: '12 000 tasks',
      description: 'how many tasks to complete',
      isCompleted: false,
      progressPercentage: 40,
    },
  ];
  constructor() { }

  createNewMileStone(milestone: Milestone) {
    this.milestones.push(milestone);
  }
}
