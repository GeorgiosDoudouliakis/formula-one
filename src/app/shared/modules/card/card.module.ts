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

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    OrdinalNumbersModule
  ],
  declarations: [
    CardComponent
  ],
  exports: [CardComponent]
})
export class CardModule { }
