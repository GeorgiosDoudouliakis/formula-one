/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

/* Place component imports */
import { DriverConstructorComponent } from './driver-constructor.component';

/* Place any other imports */
import { CardModule } from "../card/card.module";

/* Place angular material imports */
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    MatIconModule
  ],
  declarations: [DriverConstructorComponent],
  exports: [DriverConstructorComponent]
})
export class DriverConstructorModule {}
