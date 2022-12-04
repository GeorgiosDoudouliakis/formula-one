/* Place angular imports here */
import {Component, Inject, OnDestroy, OnInit} from '@angular/core';

/* Place angular material imports here */
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

/* Place RxJs imports here */
import {map} from "rxjs/operators";
import {Subscription} from "rxjs";

/* Place service imports here */
import {DriversService} from "../../services/drivers.service";

/* Place interface imports here */
import {Driver} from "@shared/interfaces/constructor-driver.interface";

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit, OnDestroy {
  public driver: Driver = {} as Driver;
  private _driverSub$: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private _driversService: DriversService
  ) { }

  public ngOnInit(): void {
    this._driverSub$ = this._driversService.getDriverDetails(this.data.id).pipe(
      map((driver: Driver) => this.driver = driver)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    if(this._driverSub$) this._driverSub$.unsubscribe();
  }
}
