/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

/* Place any other imports here */
import { PageHeaderModule, CardModule, LoaderModule  } from "@shared/modules";

/* Place component imports */
import { ScheduleComponent } from './pages/schedule/schedule.component';

/* Place service imports */
import { ScheduleService } from './services/schedule.service';

const routes = [
  {
    path: '',
    title: 'Formula 1 | Schedule',
    component: ScheduleComponent
  }
];

@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    PageHeaderModule,
    CardModule,
    LoaderModule
  ],
  exports: [
    RouterModule
  ],
  providers: [ScheduleService]
})
export class ScheduleModule { }
