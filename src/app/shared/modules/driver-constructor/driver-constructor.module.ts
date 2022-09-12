import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CardModule } from "../card/card.module";
import { DriverConstructorComponent } from './components/driver-constructor/driver-constructor.component';
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { NgxEchartsModule } from "ngx-echarts";
import * as echarts from "echarts";
import { GraphService } from "./services/graph.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    NgxEchartsModule.forRoot({ echarts })
  ],
  declarations: [
    DriverConstructorComponent,
    StatisticsComponent
  ],
  exports: [DriverConstructorComponent],
  providers: [GraphService]
})
export class DriverConstructorModule {
}
