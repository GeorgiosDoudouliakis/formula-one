/* Place angular imports here */
import {Component, Inject, OnInit} from '@angular/core';

/* Place angular material imports here */
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

/* Place RxJs imports here */
import {map, takeUntil} from "rxjs/operators";
import {catchError, tap, throwError} from "rxjs";

/* Place service imports here */
import {DriversService} from "../../services/drivers.service";

/* Place interface imports here */
import {Driver} from "@shared/interfaces/constructor-driver.interface";

/* Place any other imports here */
import {UnsubscribeUtility} from "@core/unsubscribe-utility.directive";

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent extends UnsubscribeUtility implements OnInit {
  public driver: Driver = {} as Driver;
  public loading: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private _driversService: DriversService
  ) {
    super();
  }

  public ngOnInit(): void {
    this._driversService.getDriverDetails(this.data.id).pipe(
      map((driver: Driver) => this.driver = driver),
      tap(() => this.loading = false),
      catchError((err) => {
        this.loading = false;
        console.error(err);
        return throwError(err);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
