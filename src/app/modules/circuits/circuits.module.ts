import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardModule } from "@shared/modules";
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
    HttpClientModule,
    CardModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    RouterModule
  ],
  providers: [CircuitsService]
})
export class CircuitsModule { }
