import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CardModule } from "../card/card.module";
import { DriverConstructorComponent } from './components/driver-constructor/driver-constructor.component';
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { NgxEchartsModule } from "ngx-echarts";
import * as echarts from "echarts";
import { GraphService } from "./services/graph.service";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    NgxEchartsModule.forRoot({ echarts }),
    MatIconModule
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
