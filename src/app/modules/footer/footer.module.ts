import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
