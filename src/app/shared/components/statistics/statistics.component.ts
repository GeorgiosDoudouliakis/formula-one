import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Race } from '../../models/round-standings.model';
import { EChartsOption } from 'echarts';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnChanges {
  @Input() public type: 'driver' | 'constructor';
  @Input() public results: Race[];
  public chartOption: EChartsOption;

  constructor(private graphService: GraphService) { }

  public ngOnChanges(): void {
    this.chartOption = this.graphService.graphOptions(this.xAxisData, this.yAxisData);
  }

  public get xAxisData(): string[] {
    let xaxisdata:string[] = [];
    this.results.forEach(result => xaxisdata.push(result.Circuit.circuitName));
    return xaxisdata;
  }

  public get yAxisData(): number[] {
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
