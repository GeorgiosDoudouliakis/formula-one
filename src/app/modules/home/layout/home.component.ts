/* Place angular imports */
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

/* Place service imports */
import {TopDriversService} from "../services/top-drivers/top-drivers.service";
import {TopConstructorsService} from "../services/top-constructors/top-constructors.service";

/* Place rxjs imports */
import {catchError, tap, throwError} from "rxjs";
import {map, takeUntil} from "rxjs/operators";

/* Place interface imports */
import {DriverStanding, DriverStandingsList} from "@shared/interfaces/driver-standings.interface";
import {ConstructorStanding, ConstructorStandingsList} from "@shared/interfaces/constructor-standings.interface";

/* Place any other imports here */
import {UnsubscribeUtility} from "@core/unsubscribe-utility.directive";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent extends UnsubscribeUtility implements OnInit {
  public isDriverStatsLoading: boolean = true;
  public isConstructorStatsLoading: boolean = true;
  public topDrivers: DriverStanding[] = [];
  public topConstructors: ConstructorStanding[] = [];

  constructor(
    private _topDriversService: TopDriversService,
    private _topConstructorsService: TopConstructorsService,
    private _cdr: ChangeDetectorRef
  ) {
    super();
  }

  public ngOnInit(): void {
    this._topDriversService.getTopDrivers().pipe(
      map((driversStandingsList: DriverStandingsList[]) => this.topDrivers = driversStandingsList[0].DriverStandings),
      tap(() => this.isDriverStatsLoading = false),
      tap(() => this._cdr.markForCheck()),
      catchError((err) => {
        this.isDriverStatsLoading = false;
        this._cdr.markForCheck();
        return throwError(err);
      }),
      takeUntil(this.destroy$)
    ).subscribe();

    this._topConstructorsService.getTopConstructors().pipe(
      map((constructorStandingsList: ConstructorStandingsList[]) => this.topConstructors = constructorStandingsList[0].ConstructorStandings),
      tap(() => this.isConstructorStatsLoading = false),
      tap(() => this._cdr.markForCheck()),
      catchError((err) => {
        this.isConstructorStatsLoading = false;
        this._cdr.markForCheck();
        return throwError(err);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
