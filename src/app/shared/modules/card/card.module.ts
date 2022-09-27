/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place angular material imports */
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

/* Place component imports */
import { CardComponent } from './card.component';

/* Place any other imports here */
import { OrdinalNumbersModule } from 'sh-ordinal-numbers';
import { ToLocalTimePipe } from "@shared/pipes/to-local-time/to-local-time.pipe";

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
