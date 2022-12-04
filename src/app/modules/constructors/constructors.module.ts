/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

/* Place any other imports here imports */
import { SeasonFilterModule, PageHeaderModule, LoaderModule } from "@shared/modules";

/* Place component imports here imports */
import { ConstructorsComponent } from './layout/constructors/constructors.component';
import { ConstructorDetailsComponent } from './components/constructor-details/constructor-details.component';

/* Place service imports */
import { ConstructorsService } from './services/constructors.service';

/* Place angular material imports */
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

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
    ConstructorDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SeasonFilterModule,
    HttpClientModule,
    PageHeaderModule,
    MatButtonModule,
    MatDialogModule,
    LoaderModule
  ],
  providers: [ConstructorsService]
})
export class ConstructorsModule { }
