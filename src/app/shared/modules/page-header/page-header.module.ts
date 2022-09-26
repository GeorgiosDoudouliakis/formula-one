/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place component imports */
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule],
  exports: [PageHeaderComponent]
})
export class PageHeaderModule {}
