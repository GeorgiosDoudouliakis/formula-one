/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

/* Place any other imports here imports */
import { SeasonFilterModule, PageHeaderModule, LoaderModule, DriverConstructorModule } from "@shared/modules";
import { TitleResolver } from "@shared/resolvers/title.resolver";

/* Place component imports here imports */
import { ConstructorsComponent } from './pages/constructors/constructors.component';
import { ConstructorComponent } from './pages/constructor/constructor.component';

/* Place service imports */
import { ConstructorsService } from './services/constructors.service';

/* Place angular material imports */
import { MatIconModule } from "@angular/material/icon";

const routes = [
  {
    path: '',
    title: 'F1 | Constructors',
    component: ConstructorsComponent
  },
  {
    path: ':id',
    title: TitleResolver,
    component: ConstructorComponent
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
    DriverConstructorModule,
    MatIconModule,
    LoaderModule
  ],
  providers: [ConstructorsService]
})
export class ConstructorsModule { }
