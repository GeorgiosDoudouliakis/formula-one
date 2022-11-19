/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

/* Place component imports */
import { HeaderComponent } from './components/layout/header.component';
import { NavigationComponent } from "./components/navigation/navigation.component";

/* Place angular material imports */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      MatToolbarModule,
      MatIconModule
  ],
  declarations: [
    HeaderComponent,
    NavigationComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
