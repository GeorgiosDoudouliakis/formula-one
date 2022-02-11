import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CircuitResultsComponent } from './components/circuit-results/circuit-results.component';
import { DriverConstructorComponent } from './components/driver-constructor/driver-constructor.component';
import { GoTopDirective } from './directives/go-top.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CircuitResultsComponent,
    DriverConstructorComponent,
    GoTopDirective
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
    CircuitResultsComponent,
    DriverConstructorComponent,
    GoTopDirective
  ]
})
export class SharedModule { }
