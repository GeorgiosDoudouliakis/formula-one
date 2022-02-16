import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    private title: Title,
    private yearHandlerService: YearHandlerService,
    private circuitsService: CircuitsService,
    private seasonFilterVisibilityHandler: SeasonFilterVisibilityHandlerService
  ) { 
    this.title.setTitle('Formula 1 | Circuits');
  }

  ngOnInit(): void {
    this.circuits$ = this.yearHandlerService.year$.pipe(
      switchMap(year => this.circuitsService.getCircuits(year))
    );

    this.seasonFilterVisibilityHandler.seasonFilterVisibilityHandler(true);
  }
}
