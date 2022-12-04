/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

/* Place any other imports here */
import { SeasonFilterModule, PageHeaderModule, LoaderModule } from "@shared/modules";

/* Place angular material imports */
import { MatIconModule } from "@angular/material/icon";

/* Place component imports */
import { DriversComponent } from './layout/drivers/drivers.component';
import { DriverComponent } from './layout/driver/driver.component';

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
    DriverComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    SeasonFilterModule,
    PageHeaderModule,
    MatIconModule,
    LoaderModule
  ],
  exports: [
    RouterModule
  ],
  providers: [DriversService]
})
export class DriversModule { }
