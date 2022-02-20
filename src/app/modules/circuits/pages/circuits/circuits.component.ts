import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';
import { YearHandlerService } from '@shared/services/year-handler.service';
import { Subscription, switchMap } from 'rxjs';
import { Circuit } from '../../models/circuits.model';
import { CircuitsService } from '../../services/circuits.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  circuits: Circuit[] = [];
  private circuitsSub$: Subscription;

  constructor(
    private title: Title,
    private yearHandlerService: YearHandlerService,
    private circuitsService: CircuitsService,
    private seasonFilterVisibilityHandler: SeasonFilterVisibilityHandlerService
  ) { 
    this.title.setTitle('Formula 1 | Circuits');
  }

  ngOnInit(): void {
    this.getCircuits();
    this.seasonFilterVisibilityHandler.seasonFilterVisibilityHandler(true);
  }

  ngOnDestroy() {
    this.circuitsSub$?.unsubscribe();
  }

  private getCircuits() {
    this.isLoading = true;

    this.circuitsSub$ = this.yearHandlerService.year$.pipe(
      switchMap(year => this.circuitsService.getCircuits(year))
    ).subscribe({
      next: (circuits: Circuit[]) => {
        this.isLoading = false;
        this.circuits = circuits;
      },
      error: (err) => this.isLoading = false,
      complete: () => this.isLoading = false
    });
  }
}
