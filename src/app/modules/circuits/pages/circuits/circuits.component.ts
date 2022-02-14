import { Component, OnInit } from '@angular/core';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';
import { YearHandlerService } from '@shared/services/year-handler.service';
import { Observable, switchMap } from 'rxjs';
import { Circuit } from '../../models/circuits.model';
import { CircuitsService } from '../../services/circuits.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent implements OnInit {
  circuits$: Observable<Circuit[]>;

  constructor(
    private yearHandlerService: YearHandlerService,
    private circuitsService: CircuitsService,
    private seasonFilterVisibilityHandler: SeasonFilterVisibilityHandlerService
  ) { }

  ngOnInit(): void {
    this.circuits$ = this.yearHandlerService.year$.pipe(
      switchMap(year => this.circuitsService.getCircuits(year))
    );

    this.seasonFilterVisibilityHandler.seasonFilterVisibilityHandler(true);
  }
}
