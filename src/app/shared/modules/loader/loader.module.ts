/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Place component imports */
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule],
  exports: [LoaderComponent]
})
export class LoaderModule { }
