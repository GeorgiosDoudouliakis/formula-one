import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Driver } from '@shared/models/constructor-driver.model';
import { Subscription, switchMap } from 'rxjs';
import { DriverService } from '../../services/driver.service';

interface State {
  type: 'driver' | 'constructor';
  navigationId: number;
}

@Component({
  selector: 'app-driver-constructor',
  templateUrl: './driver-constructor.component.html',
  styleUrls: ['./driver-constructor.component.scss']
})
export class DriverConstructorComponent implements OnInit {
  details: Driver;
  private detailsSub$: Subscription;

  constructor(
    private driverService: DriverService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDriverOrConstructorData();
  }

  private getDriverOrConstructorData() {
    const type = (this.location.getState() as State).type;
    if(type === 'driver') {
      this.detailsSub$ = this.route.queryParams.pipe(
        switchMap((params: Params) => this.driverService.getDriverDetails(params['driver']))
      ).subscribe((driver: Driver[]) => this.details = driver[0]);
    }
  }
}