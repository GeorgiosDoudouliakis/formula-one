import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { DriverComponent } from './components/driver/driver.component';
import { DriverService } from './services/driver.service';

const routes = [
  { path: '', component: DriverComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [DriverService]
})
export class DriversModule { }
