import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { SeasonFilterModule, PageHeaderModule } from "@shared/modules";
import { DriverConstructorModule, DriversConstructorsModule } from "@shared/modules";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DriversComponent } from './pages/drivers/drivers.component';
import { DriverComponent } from './pages/driver/driver.component';
import { DriversService } from './services/drivers.service';

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
    DriversConstructorsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    RouterModule
  ],
  providers: [DriversService]
})
export class DriversModule { }
