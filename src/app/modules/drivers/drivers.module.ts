import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { SeasonFilterModule, PageHeaderModule } from "@shared/modules";
import { DriverConstructorModule } from "@shared/modules";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DriversComponent } from './pages/drivers/drivers.component';
import { DriverComponent } from './pages/driver/driver.component';
import { DriverService } from './services/driver.service';
import { DriversService } from "@shared/services";

const routes = [
  { path: '', component: DriversComponent },
  { path: ':id', component: DriverComponent }
]

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
    MatProgressSpinnerModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DriverService,
    DriversService
  ]
})
export class DriversModule { }
