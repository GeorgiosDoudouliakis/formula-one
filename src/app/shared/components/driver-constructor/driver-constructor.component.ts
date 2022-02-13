import { Component, Input, OnInit } from '@angular/core';
import { YearHandlerService } from '@shared/services/year-handler.service';
import { Subscription } from 'rxjs';
import { Race } from '../../models/round-standings.model';

@Component({
  selector: 'app-driver-constructor',
  templateUrl: './driver-constructor.component.html',
  styleUrls: ['./driver-constructor.component.scss']
})
export class DriverConstructorComponent implements OnInit {
  @Input() type: 'driver' | 'constructor';
  @Input() details: any;
  @Input() results: Race[];
  year: string;
  private yearSub$: Subscription;

  constructor(private yearHandlerService: YearHandlerService) { }

  ngOnInit(): void {
    this.yearSub$ = this.yearHandlerService.year$.subscribe((year: string) => this.year = year);
  }

  ngOnDestroy() {
    this.yearSub$?.unsubscribe();
  }
}
