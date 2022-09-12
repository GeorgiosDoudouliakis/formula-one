import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { CardComponent } from './components/card/card.component';
import { DriverConstructorComponent } from './components/driver-constructor/driver-constructor.component';
import { ConstructorsDriversComponent } from './components/constructors-drivers/constructors-drivers.component';
import { SeasonFilterComponent } from './components/season-filter/season-filter.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ToLocalTimePipe } from './pipes/to-local-time.pipe';

@NgModule({
  declarations: [
    CardComponent,
    DriverConstructorComponent,
    ConstructorsDriversComponent,
    SeasonFilterComponent,
    StatisticsComponent,
    ToLocalTimePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxEchartsModule.forRoot({ echarts })
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CardComponent,
    DriverConstructorComponent,
    ConstructorsDriversComponent,
    SeasonFilterComponent,
    StatisticsComponent
  ]
})
export class SharedModule { }
