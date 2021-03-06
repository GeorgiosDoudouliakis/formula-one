import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CircuitsComponent } from './pages/circuits/circuits.component';
import { CircuitsService } from './services/circuits.service';
import { CircuitLocationComponent } from './components/circuit-location/circuit-location.component';
import { MapComponent } from './components/map/map.component';

const routes = [
  { path: '', component: CircuitsComponent }
]

@NgModule({
  declarations: [
    CircuitsComponent,
    CircuitLocationComponent,
    MapComponent
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
