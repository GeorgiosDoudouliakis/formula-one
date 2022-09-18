import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StandingsComponent } from './pages/standings/standings.component';
import { TableComponent } from './components/table/table.component';
import { SeasonFilterModule, PageHeaderModule } from "@shared/modules";
import { DriverConstructorStandingsService } from './services/driver-constructor-standings.service';
import { YearHandlerService } from "@shared/services";

const routes = [
  { path: '', component: StandingsComponent }
];

@NgModule({
  declarations: [
    StandingsComponent,
    TableComponent
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
    MatProgressSpinnerModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DriverConstructorStandingsService,
    YearHandlerService
  ]
})
export class StandingsModule { }
