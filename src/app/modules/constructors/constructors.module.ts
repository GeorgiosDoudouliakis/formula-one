/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

/* Place any other imports here imports */
import { SeasonFilterModule, PageHeaderModule, LoaderModule } from "@shared/modules";

/* Place component imports here imports */
import { ConstructorsComponent } from './layout/constructors/constructors.component';
import { ConstructorComponent } from './layout/constructor/constructor.component';

/* Place service imports */
import { ConstructorsService } from './services/constructors.service';

/* Place angular material imports */
import { MatIconModule } from "@angular/material/icon";

const routes = [
  {
    path: '',
    title: 'F1 | Constructors',
    component: ConstructorsComponent
  }
];

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
    MatIconModule,
    LoaderModule
  ],
  providers: [ConstructorsService]
})
export class ConstructorsModule { }
