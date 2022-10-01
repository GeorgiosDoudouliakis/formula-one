/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

/* Place any other imports here imports */
import {SeasonFilterModule, PageHeaderModule, DriverConstructorModule, LoaderModule, CardModule} from "@shared/modules";

/* Place component imports here imports */
import { ConstructorsComponent } from './pages/constructors/constructors.component';
import { ConstructorComponent } from './pages/constructor/constructor.component';

/* Place service imports */
import { ConstructorsService } from './services/constructors.service';

/* Place angular material imports */
import { MatIconModule } from "@angular/material/icon";
import { TitleResolver } from "@core/resolvers/title.resolver";

const routes = [
  {
    path: '',
    title: 'Formula 1 | Constructors',
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
    CardModule,
    LoaderModule
  ],
  providers: [ConstructorsService]
})
export class ConstructorsModule { }
