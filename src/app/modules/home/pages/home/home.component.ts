/* Place angular imports */
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

/* Place service imports */
import {TopDriversService} from "../../services/top-drivers/top-drivers.service";
import {TopConstructorsService} from "../../services/top-constructors/top-constructors.service";

/* Place rxjs imports */
import {catchError, Subscription, tap, throwError} from "rxjs";
import {map} from "rxjs/operators";

/* Place interface imports */
import {DriverStanding, DriverStandingsList} from "@shared/interfaces/driver-standings.interface";
import {ConstructorStanding, ConstructorStandingsList} from "@shared/interfaces/constructor-standings.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  public isDriverStatsLoading: boolean = true;
  public isConstructorStatsLoading: boolean = true;
  public topDrivers: DriverStanding[] = [];
  public topConstructors: ConstructorStanding[] = [];
  private _topDriversSub$: Subscription;
  private _topConstructorsSub$: Subscription;

  constructor(
    private _topDriversService: TopDriversService,
    private _topConstructorsService: TopConstructorsService,
    private _cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this._topDriversSub$ = this._topDriversService.getTopDrivers().pipe(
      tap(() => this.isDriverStatsLoading = false),
      map((driversStandingsList: DriverStandingsList[]) => this.topDrivers = driversStandingsList[0].DriverStandings),
      tap(() => this._cdr.markForCheck()),
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    ).subscribe();

    this._topConstructorsSub$ = this._topConstructorsService.getTopConstructors().pipe(
      tap(() => this.isConstructorStatsLoading = false),
      map((constructorStandingsList: ConstructorStandingsList[]) => this.topConstructors = constructorStandingsList[0].ConstructorStandings),
      tap(() => this._cdr.markForCheck()),
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    ).subscribe();
  }

  public ngOnDestroy(): void {
    if(this._topDriversSub$) this._topDriversSub$.unsubscribe();
    if(this._topConstructorsSub$) this._topDriversSub$.unsubscribe();
  }
}
