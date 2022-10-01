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

/* Place any other imports here */
import { LoaderModule, SeasonFilterModule, PageHeaderModule } from "@shared/modules";

/* Place components imports */
import { StandingsComponent } from './pages/standings/standings.component';
import { DriversTableComponent } from "./components/drivers-table/drivers-table.component";
import { ConstructorsTableComponent } from './components/constructors-table/constructors-table.component';

/* Place service imports */
import { DriverConstructorStandingsService } from './services/driver-constructor-standings.service';

const routes = [
  {
    path: '',
    title: 'Formula 1 | Standings',
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
    SeasonFilterModule,
    PageHeaderModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    LoaderModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DriverConstructorStandingsService
  ]
})
export class StandingsModule { }
