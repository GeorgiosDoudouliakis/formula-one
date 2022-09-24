import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { OrdinalNumbersModule } from 'sh-ordinal-numbers';
import { CardComponent } from './card.component';
import { ToLocalTimePipe } from "@shared/pipes";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    OrdinalNumbersModule
  ],
  declarations: [
    CardComponent,
    ToLocalTimePipe
  ],
  exports: [CardComponent]
})
export class CardModule { }
