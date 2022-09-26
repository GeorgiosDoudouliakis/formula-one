/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

/* Place angular material imports */
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog';

/* Place any other imports here */
import { PageHeaderModule, CardModule, LoaderModule } from "@shared/modules";

/* Place service imports */
import { CircuitsComponent } from './pages/circuits/circuits.component';
import { CircuitsService } from './services/circuits.service';

/* Place component imports */
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
    PageHeaderModule,
    LoaderModule,
    CardModule,
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
