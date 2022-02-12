import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CardComponent } from './components/card/card.component';
import { DriverConstructorComponent } from './components/driver-constructor/driver-constructor.component';
import { GoTopDirective } from './directives/go-top.directive';
import { ConstructorsDriversComponent } from './components/constructors-drivers/constructors-drivers.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CardComponent,
    DriverConstructorComponent,
    GoTopDirective,
    ConstructorsDriversComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    DriverConstructorComponent,
    GoTopDirective,
    ConstructorsDriversComponent
  ]
})
export class SharedModule { }