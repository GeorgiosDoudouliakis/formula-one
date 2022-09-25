import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CardModule } from "../card/card.module";
import { DriverConstructorComponent } from './components/driver-constructor/driver-constructor.component';
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
