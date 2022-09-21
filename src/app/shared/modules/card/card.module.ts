import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from '@angular/material/tooltip';
import { OrdinalNumbersModule } from 'sh-ordinal-numbers';
import { CardComponent } from './card.component';
import { ToLocalTimePipe } from "@shared/pipes";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    OrdinalNumbersModule
  ],
  declarations: [
    CardComponent,
    ToLocalTimePipe
  ],
  exports: [CardComponent]
})
export class CardModule { }
