import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackForthButtonsComponent } from './back-forth-buttons.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    BackForthButtonsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [BackForthButtonsComponent]
})
export class BackForthButtonsModule { }
