import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '@shared/models/constructor-driver.model';
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
    private yearHandlerService: YearHandlerService,
    public driversService: DriversService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.drivers$ = this.yearHandlerService.year$.pipe(
      switchMap((year: string) => this.driversService.getDrivers(year))
    );
  }
}
