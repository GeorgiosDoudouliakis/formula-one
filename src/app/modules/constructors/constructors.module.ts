/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

/* Place any other imports here imports */
import { SeasonFilterModule, PageHeaderModule, DriverConstructorModule, LoaderModule } from "@shared/modules";

/* Place component imports here imports */
import { ConstructorsComponent } from './pages/constructors/constructors.component';
import { ConstructorComponent } from './pages/constructor/constructor.component';

/* Place service imports */
import { ConstructorService } from './services/constructor.service';
import { ConstructorsService } from "@shared/services";

/* Place angular material imports */
import { MatIconModule } from "@angular/material/icon";

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
    LoaderModule
  ],
  providers: [
    ConstructorService,
    ConstructorsService
  ]
})
export class ConstructorsModule { }
