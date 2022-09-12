import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { DriversConstructorsComponent } from './drivers-constructors.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [DriversConstructorsComponent],
  exports: [DriversConstructorsComponent]
})
export class DriversConstructorsModule {
}
