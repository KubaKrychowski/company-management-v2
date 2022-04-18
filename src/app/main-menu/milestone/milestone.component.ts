import { Milestone } from './../../shared/milestone.model';
import { MilestonesService } from './../../services/milestones.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MonthlyMilestonesModalComponent } from '../monthly-milestones-modal/monthly-milestones-modal.component';
@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})
export class MilestoneComponent implements OnInit {

  constructor(
    public milestonesService: MilestonesService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {

  }

  openMilestoneDetailsModal(miletstone: Milestone) {
    const modalRef = this.modalService.open(MonthlyMilestonesModalComponent);
    this.milestonesService.currentlyOpenedMilestone = miletstone;
  }

}
