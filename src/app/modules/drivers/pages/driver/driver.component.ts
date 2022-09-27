/* Place angular imports */
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

/* Place interface imports */
import {Driver} from '@shared/interfaces/constructor-driver.interface';
import {Race} from '@shared/interfaces/round-standings.interface';

/* Place rxjs imports */
import {catchError, forkJoin, Subscription, switchMap, tap, throwError} from 'rxjs';
import {map} from "rxjs/operators";

/* Place service imports */
import {DriverService} from '../../services/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriverComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public details: any;
  public results: Race[] = [];
  private _detailsSub$: Subscription;

  constructor(
    private _driverService: DriverService,
    private _route: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.getDriverDetails();
  }

  public ngOnDestroy(): void {
    if(this._detailsSub$) this._detailsSub$.unsubscribe();
  }

  private getDriverDetails(): void {
    this._detailsSub$ = this._route.params.pipe(
      tap(() => this.isLoading = true),
      switchMap((params: Params) => forkJoin([
        this._driverService.getDriverDetails(params['id']),
        this._driverService.getDriverResults(params['id'])
      ])),
      tap(() => this.isLoading = false),
      map((res: [Driver[], Race[]]) => {
        this.details = res[0][0];
        this.results = res[1];
      }),
      tap(() => this._cdr.markForCheck()),
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    ).subscribe();
  }
}
