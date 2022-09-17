import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { PageHeaderModule } from "@shared/modules";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DriverConstructorModule, DriversConstructorsModule } from "@shared/modules";
import { ConstructorsComponent } from './pages/constructors/constructors.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { ConstructorsService } from './services/constructors.service';

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
    HttpClientModule,
    PageHeaderModule,
    DriverConstructorModule,
    DriversConstructorsModule,
    MatProgressSpinnerModule
  ],
  providers: [ConstructorsService]
})
export class ConstructorsModule { }
