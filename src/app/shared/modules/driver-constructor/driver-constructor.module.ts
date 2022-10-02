/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

/* Place component imports */
import { DriverConstructorComponent } from './components/driver-constructor/driver-constructor.component';
import {
  DriverConstructorCardComponent
} from "./components/driver-constructor-card/driver-constructor-card.component";

/* Place angular material imports */
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

/* Place any other imports here */
import { OrdinalNumbersModule } from 'sh-ordinal-numbers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    OrdinalNumbersModule
  ],
  declarations: [DriverConstructorComponent, DriverConstructorCardComponent],
  exports: [DriverConstructorComponent]
})
export class DriverConstructorModule {}
