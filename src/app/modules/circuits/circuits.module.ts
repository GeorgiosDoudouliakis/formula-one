/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

/* Place component imports */
import { CircuitLocationComponent } from './components/circuit-location/circuit-location.component';
import { MapComponent } from './components/map/map.component';
import { CircuitCardComponent } from './components/circuit-card/circuit-card.component';

/* Place angular material imports */
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog';

/* Place any other imports here */
import { PageHeaderModule, LoaderModule } from "@shared/modules";

/* Place service imports */
import { CircuitsComponent } from './pages/circuits/circuits.component';
import { CircuitsService } from './services/circuits.service';

const routes = [
  {
    path: '',
    title: 'Formula 1 | Circuits',
    component: CircuitsComponent
  }
]

@NgModule({
  declarations: [
    CircuitsComponent,
    CircuitLocationComponent,
    MapComponent,
    CircuitCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    PageHeaderModule,
    LoaderModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CircuitsService
  ]
})
export class CircuitsModule { }
