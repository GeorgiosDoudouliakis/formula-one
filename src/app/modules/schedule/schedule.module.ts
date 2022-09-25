import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { PageHeaderModule } from "@shared/modules";
import { CardModule } from "@shared/modules";
import { LoaderModule } from "@shared/modules";
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ScheduleService } from './services/schedule.service';

const routes = [
  { path: '', component: ScheduleComponent }
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
