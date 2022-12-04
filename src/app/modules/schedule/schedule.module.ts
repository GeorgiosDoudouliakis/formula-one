/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

/* Place component imports */
import { ScheduleComponent } from './layout/schedule.component';
import { ScheduleCardComponent } from './components/schedule-card/schedule-card.component';
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { LoaderComponent } from "@shared/components/loader/loader.component";

/* Place service imports */
import { ScheduleService } from './services/schedule.service';

/* Place angular material imports */
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

/* Place any other imports here */
import { ToLocalTimePipe } from "./pipes/to-local-time/to-local-time.pipe";

const routes = [
  {
    path: '',
    title: 'F1 | Schedule',
    component: ScheduleComponent
  }
];

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleCardComponent,
    ToLocalTimePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    LoaderComponent,
    PageHeaderComponent,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    RouterModule
  ],
  providers: [ScheduleService]
})
export class ScheduleModule { }
