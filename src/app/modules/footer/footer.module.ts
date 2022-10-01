/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place component imports */
import { FooterComponent } from './footer.component';

/* Place angular material imports */
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
