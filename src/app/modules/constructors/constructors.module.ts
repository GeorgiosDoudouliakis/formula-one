import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { SeasonFilterModule, PageHeaderModule } from "@shared/modules";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DriverConstructorModule } from "@shared/modules";
import { ConstructorsComponent } from './pages/constructors/constructors.component';
import { ConstructorComponent } from './pages/constructor/constructor.component';
import { ConstructorService } from './services/constructor.service';
import { ConstructorsService } from "@shared/services";

const routes = [
  { path: '', component: ConstructorsComponent },
  { path: ':id', component: ConstructorComponent }
]

@NgModule({
  declarations: [
    ConstructorsComponent,
    ConstructorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SeasonFilterModule,
    HttpClientModule,
    PageHeaderModule,
    DriverConstructorModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    ConstructorService,
    ConstructorsService
  ]
})
export class ConstructorsModule { }
