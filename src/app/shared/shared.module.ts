import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CardComponent } from './components/card/card.component';
import { DriverConstructorComponent } from './components/driver-constructor/driver-constructor.component';
import { GoTopDirective } from './directives/go-top.directive';
import { ConstructorsDriversComponent } from './components/constructors-drivers/constructors-drivers.component';
import { SeasonFilterComponent } from './components/season-filter/season-filter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CardComponent,
    DriverConstructorComponent,
    GoTopDirective,
    ConstructorsDriversComponent,
    SeasonFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    DriverConstructorComponent,
    GoTopDirective,
    ConstructorsDriversComponent,
    SeasonFilterComponent
  ]
})
export class SharedModule { }