import { AfterViewChecked, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Race } from '../../models/round-standings.model';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements AfterViewChecked {
  @Input() type: 'driver' | 'constructor';
  @Input() results: Race[];
  chartOption: EChartsOption;

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewChecked(): void {
    this.chartOption = {
      tooltip: {
        show: true,
        trigger: 'axis',
        type: "line"
      },
      xAxis: {
        type: 'category',
        data: this.xAxisData,
        axisLine: {
          show: true
        },
        axisLabel: {
          rotate: 90,
          color: '#888',
          inside: true
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: true
        },
        axisLabel: {
          color: 'white'
        },
        splitLine: {
          lineStyle: {
            color: '#444'
          }
        }
      },
      series: [
        {
          data: this.yAxisData,
          type: 'line',
          lineStyle: {
            color: '#d43535'
          }
        }
      ]
    };

    this.cd.detectChanges();
  }

  get xAxisData() {
    let xaxisdata:string[] = [];
    this.results.forEach(result => xaxisdata.push(result.Circuit.circuitName));
    return xaxisdata;
  }

  get yAxisData() {
    let yaxisdata:number[] = [];
    this.results.forEach(result => { 
      if(this.type === 'driver') {
        yaxisdata.push(+result.Results[0].points);
      } else if(this.type === 'constructor') {
        yaxisdata.push(result.Results.reduce((prevVal, currentVal) => (+prevVal) + (+currentVal.points), 0));
      }
    });
    return yaxisdata;
  }
}
