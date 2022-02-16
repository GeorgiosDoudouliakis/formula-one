import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Driver } from '@shared/models/constructor-driver.model';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';
import { YearHandlerService } from '@shared/services/year-handler.service';
import { Observable, switchMap } from 'rxjs';
import { DriversService } from '../../services/drivers.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  drivers$: Observable<Driver[]>;

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
    this.drivers$ = this.yearHandlerService.year$.pipe(
      switchMap((year: string) => this.driversService.getDrivers(year))
    );

    this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(true);
  }
}
