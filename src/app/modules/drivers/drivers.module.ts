import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { DriversComponent } from './pages/drivers/drivers.component';
import { DriverComponent } from './components/driver/driver.component';
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
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [DriversService]
})
export class DriversModule { }
