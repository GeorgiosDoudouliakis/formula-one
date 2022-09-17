import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from "@angular/material/tooltip";
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from "./components/navigation/navigation.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatTooltipModule
    ],
  declarations: [
    HeaderComponent,
    NavigationComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
