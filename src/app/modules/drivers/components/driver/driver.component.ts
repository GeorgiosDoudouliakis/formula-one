import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Driver } from '@shared/models/constructor-driver.model';
import { Race } from '@shared/models/round-standings.model';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';
import { Subscription, switchMap } from 'rxjs';
import { DriversService } from '../../services/drivers.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit, OnDestroy {
  details: any;
  results: Race[] = [];
  private detailsSub$: Subscription;
  private resultsSub$: Subscription;

  constructor(
    private driversService: DriversService,
    private route: ActivatedRoute,
    private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService
  ) { }

  ngOnInit(): void {
    this.getDriverDetails();
    this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(false);
  }

  ngOnDestroy() {
    this.detailsSub$?.unsubscribe();
    this.resultsSub$?.unsubscribe();
  }

  private getDriverDetails() {
    this.detailsSub$ = this.route.params.pipe(
      switchMap((params: Params) => this.driversService.getDriverDetails(params['id']))
    ).subscribe((driver: Driver[]) => this.details = driver[0]);
      
    this.resultsSub$ = this.route.params.pipe(
      switchMap((params: Params) => this.driversService.getDriverResults(params['id']))
    ).subscribe((results: Race[]) => this.results = results);
  }
}
