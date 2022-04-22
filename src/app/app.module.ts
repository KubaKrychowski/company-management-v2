import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { MilestoneComponent } from './main-menu/milestone/milestone.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AssignedProjectsModalComponent } from './main-menu/assigned-projects-modal/assigned-projects-modal.component';
import { AssignedTasksModalComponent } from './main-menu/assigned-tasks-modal/assigned-tasks-modal.component';
import { CorporateStructureModalComponent } from './main-menu/corporate-structure-modal/corporate-structure-modal.component';
import { MonthlyMilestonesModalComponent } from './main-menu/monthly-milestones-modal/monthly-milestones-modal.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

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
} from 'chart.js';
import { UserSettingsModalComponent } from './user-settings-modal/user-settings-modal.component';
import { ProfileCreatorModalComponent } from './home/profile-creator-modal/profile-creator-modal.component';

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
    MonthlyMilestonesModalComponent,
    AuthButtonComponent,
    HomeComponent,
    UserSettingsModalComponent,
    ProfileCreatorModalComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-npnxfodq.us.auth0.com',
      clientId: 'Zjy74gLsejhHiOqqyD0nYk2viZnPnDkR'
    }),
  ],

  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})

export class AppModule { }
