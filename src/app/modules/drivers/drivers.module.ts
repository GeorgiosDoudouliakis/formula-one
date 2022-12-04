/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

/* Place any other imports here */
import { SeasonFilterModule, PageHeaderModule, LoaderModule } from "@shared/modules";

/* Place angular material imports */
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog';

/* Place component imports */
import { DriversComponent } from './layout/drivers/drivers.component';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';

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
    SeasonFilterModule,
    PageHeaderModule,
    MatButtonModule,
    MatDialogModule,
    LoaderModule
  ],
  exports: [
    RouterModule
  ],
  providers: [DriversService]
})
export class DriversModule { }
