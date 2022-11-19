/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

/* Place component imports */
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ScheduleCardComponent } from './components/schedule-card/schedule-card.component';

/* Place service imports */
import { ScheduleService } from './services/schedule.service';

/* Place angular material imports */
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

/* Place any other imports here */
import { PageHeaderModule, LoaderModule  } from "@shared/modules";
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
    PageHeaderModule,
    MatCardModule,
    MatIconModule,
    LoaderModule
  ],
  exports: [
    RouterModule
  ],
  providers: [ScheduleService]
})
export class ScheduleModule { }
