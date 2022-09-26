/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Place component imports */
import { BackForthButtonsComponent } from './back-forth-buttons.component';

/* Place angular material imports */
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    BackForthButtonsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [BackForthButtonsComponent]
})
export class BackForthButtonsModule { }
