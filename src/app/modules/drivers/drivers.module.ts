/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

/* Place any other imports here */
import { SeasonFilterModule, PageHeaderModule, LoaderModule, DriverConstructorModule } from "@shared/modules";
import { TitleResolver } from "@shared/resolvers/title.resolver";

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
  },
  {
    path: ':id',
    title: TitleResolver,
    component: DriverComponent
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
    DriverConstructorModule,
    MatIconModule,
    LoaderModule
  ],
  exports: [
    RouterModule
  ],
  providers: [DriversService]
})
export class DriversModule { }
