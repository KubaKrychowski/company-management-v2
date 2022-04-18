import { Milestone } from './../../shared/milestone.model';
import { MilestonesService } from './../../services/milestones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-milestones-modal',
  templateUrl: './monthly-milestones-modal.component.html',
  styleUrls: ['./monthly-milestones-modal.component.scss']
})
export class MonthlyMilestonesModalComponent implements OnInit {

  milestone!: Milestone;

  constructor(private milestonesService: MilestonesService) { }

  ngOnInit(): void {
    if (this.milestonesService.currentlyOpenedMilestone) {
      this.milestone = this.milestonesService.currentlyOpenedMilestone;
    }
  }


}
