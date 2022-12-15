/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

/* Place angular material imports */
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

/* Place component imports */
import { DriversComponent } from './layout/drivers/drivers.component';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { LoaderComponent } from "@shared/components/loader/loader.component";
import { SeasonFilterComponent } from "@shared/components/season-filter/season-filter.component";

/* Place service imports */
import { DriversService } from './services/drivers.service';

const routes = [
  {
    path: '',
    title: 'F1 | Drivers',
    component: DriversComponent
  }
];

@NgModule({
  declarations: [
    DriversComponent,
    DriverDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    LoaderComponent,
    PageHeaderComponent,
    SeasonFilterComponent,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    RouterModule
  ],
  providers: [DriversService]
})
export class DriversModule { }
