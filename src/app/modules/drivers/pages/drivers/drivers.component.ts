import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Driver } from '@shared/models/constructor-driver.model';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';
import { YearHandlerService } from '@shared/services/year-handler.service';
import { Subscription, switchMap } from 'rxjs';
import { DriversService } from '../../services/drivers.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  drivers: Driver[] = [];
  private driversSub$: Subscription;

  constructor(
    private title: Title,
    private yearHandlerService: YearHandlerService,
    public driversService: DriversService,
    public router: Router,
    private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService
  ) { 
    this.title.setTitle('Formula 1 | Drivers');
  }

  ngOnInit(): void {
    this.getDrivers();
    this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(true);
  }

  ngOnDestroy() {
    this.driversSub$?.unsubscribe();
  }

  private getDrivers() {
    this.isLoading = true;

    this.driversSub$ = this.yearHandlerService.year$.pipe(
      switchMap((year: string) => this.driversService.getDrivers(year))
    ).subscribe({
      next: (drivers: Driver[]) => {
        this.isLoading = false;
        this.drivers = drivers;
      },
      error: (err) => this.isLoading = false,
      complete: () => this.isLoading = false
    });
  }
}
