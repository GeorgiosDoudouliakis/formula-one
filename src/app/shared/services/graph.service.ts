import { Injectable } from '@angular/core';
import { EChartsOption } from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() { }

  graphOptions(xAxisData: string[], yAxisData: number[]): EChartsOption {
    return {
      xAxis: {
        type: 'category',
        data: xAxisData,
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
        minorTick: {
          show: true
        },
        splitLine: {
          lineStyle: {
            color: '#444'
          }
        },
        axisPointer: {
          show: true,
          type: 'line',
          snap: true,
          label: {
            show: true,
            precision: 2,
            formatter: function(params: any) {
              return params.value.toString();
            }
          },
          lineStyle: {
            color: '#666'
          }
        }
      },
      series: [
        {
          data: yAxisData,
          type: 'line',
          lineStyle: {
            color: '#d43535'
          }
        }
      ]
    }
  }
}
