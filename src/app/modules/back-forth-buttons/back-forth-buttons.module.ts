import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackForthButtonsComponent } from './back-forth-buttons.component';
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
