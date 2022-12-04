/* Place angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

/* Place angular material imports */
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

/* Place components imports */
import { StandingsComponent } from './layout/standings.component';
import { DriversTableComponent } from "./components/drivers-table/drivers-table.component";
import { ConstructorsTableComponent } from './components/constructors-table/constructors-table.component';
import { SeasonFilterComponent } from "@shared/components/season-filter/season-filter.component";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { LoaderComponent } from "@shared/components/loader/loader.component";

/* Place service imports */
import { DriverConstructorStandingsService } from './services/driver-constructor-standings.service';

const routes = [
  {
    path: '',
    title: 'F1 | Standings',
    component: StandingsComponent
  }
];

@NgModule({
  declarations: [
    StandingsComponent,
    DriversTableComponent,
    ConstructorsTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderComponent,
    SeasonFilterComponent,
    PageHeaderComponent,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DriverConstructorStandingsService
  ]
})
export class StandingsModule { }
