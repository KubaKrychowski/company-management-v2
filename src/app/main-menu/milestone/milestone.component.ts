import { FinanceService } from './../../services/finance.service';
import { MilestonesService } from './../../services/milestones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})
export class MilestoneComponent implements OnInit {

  constructor(public milestonesService: MilestonesService,) { }

  ngOnInit(): void {

  }

}
