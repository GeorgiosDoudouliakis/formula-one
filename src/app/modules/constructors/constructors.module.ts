/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

/* Place component imports here imports */
import { ConstructorsComponent } from './layout/constructors/constructors.component';
import { ConstructorDetailsComponent } from './components/constructor-details/constructor-details.component';
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { LoaderComponent } from "@shared/components/loader/loader.component";
import { SeasonFilterComponent } from "@shared/components/season-filter/season-filter.component";

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
    HttpClientModule,
    LoaderComponent,
    PageHeaderComponent,
    SeasonFilterComponent,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [ConstructorsService]
})
export class ConstructorsModule { }
