/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

/* Place any other imports here */
import { SeasonFilterModule, PageHeaderModule, DriverConstructorModule, LoaderModule } from "@shared/modules";

/* Place angular material imports */
import { MatIconModule } from "@angular/material/icon";

/* Place component imports */
import { DriversComponent } from './pages/drivers/drivers.component';
import { DriverComponent } from './pages/driver/driver.component';

/* Place service imports */
import { DriversService } from './services/drivers.service';
import { TitleResolver } from "@core/resolvers/title.resolver";

const routes = [
  {
    path: '',
    title: 'Formula 1 | Drivers',
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
