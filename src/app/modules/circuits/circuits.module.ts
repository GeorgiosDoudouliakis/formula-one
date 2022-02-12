import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CircuitsComponent } from './pages/circuits/circuits.component';
import { CircuitsService } from './services/circuits.service';

const routes = [
  { path: '', component: CircuitsComponent }
]

@NgModule({
  declarations: [
    CircuitsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [CircuitsService]
})
export class CircuitsModule { }
