import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Driver } from '@shared/models/constructor-driver.model';
import { Subscription, switchMap } from 'rxjs';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit, OnDestroy {
  details = {} as Driver;
  private detailsSub$: Subscription;

  constructor(
    private driverService: DriverService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDriverData();
  }

  ngOnDestroy() {
    this.detailsSub$?.unsubscribe();
  }

  private getDriverData() {
    this.detailsSub$ = this.route.queryParams.pipe(
      switchMap((params: Params) => this.driverService.getDriverDetails(params['driver']))
    ).subscribe((driver: Driver[]) => this.details = driver[0]);
  }
}