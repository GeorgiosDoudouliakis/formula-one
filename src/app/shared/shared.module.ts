import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DriverConstructorComponent } from './components/driver-constructor/driver-constructor.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DriverConstructorComponent
  ],
  imports: [
    CommonModule,
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
    DriverConstructorComponent
  ]
})
export class SharedModule { }
