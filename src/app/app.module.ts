import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RightMenuComponent } from './right-menu/right-menu.component';

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';
import { MilestoneComponent } from './main-menu/milestone/milestone.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AssignedProjectsModalComponent } from './main-menu/assigned-projects-modal/assigned-projects-modal.component';
import { AssignedTasksModalComponent } from './main-menu/assigned-tasks-modal/assigned-tasks-modal.component';
import { CorporateStructureModalComponent } from './main-menu/corporate-structure-modal/corporate-structure-modal.component';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,

);

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    MainMenuComponent,
    RightMenuComponent,
    MilestoneComponent,
    AssignedProjectsModalComponent,
    AssignedTasksModalComponent,
    CorporateStructureModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule 

  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
