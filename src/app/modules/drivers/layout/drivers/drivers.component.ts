/* Place angular imports */
import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

/* Place RxJs imports */
import {catchError, Subscription, switchMap, tap, throwError} from "rxjs";
import {map} from "rxjs/operators";

/* Place interface imports */
import {Driver} from '@shared/interfaces/constructor-driver.interface';

/* Place service imports */
import {DriversService} from "../../services/drivers.service";

/* Place any other imports here */
import {AbstractDriversConstructorsDirective} from "@shared/abstraction/drivers-constructors/abstract-drivers-constructors.directive";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriversComponent extends AbstractDriversConstructorsDirective<Driver> {
  public selectedYear: string;
  public loading: boolean = false;
  public data: Array<Driver>;
  protected _dataSub$: Subscription;

  constructor(
    public override router: Router,
    protected override _route: ActivatedRoute,
    protected override _cdr: ChangeDetectorRef,
    private _driversService: DriversService
  ) {
    super(router, _route, _cdr);
  }

  protected override getDataByYear(): void {
    this._dataSub$ = this._route.queryParams.pipe(
      tap(() => this.loading = true),
      switchMap((params: Params) => {
        this.selectedYear = params['year'];
        return this._driversService.getDrivers(this.selectedYear)
      }),
      map((data: Array<Driver>) => this.data = data),
      tap(() => this.loading = false),
      tap(() => this._cdr.markForCheck()),
      catchError((error)=> {
        console.error(error);
        return throwError(error);
      })
    ).subscribe();
  }

  public imageExists(details: any): boolean {
    return details?.driverId === 'alonso' ||
      details?.driverId === 'bottas' ||
      details?.driverId === 'gasly'  ||
      details?.driverId === 'giovinazzi' ||
      details?.driverId === 'hamilton' ||
      details?.driverId === 'kubica' ||
      details?.driverId === 'latifi' ||
      details?.driverId === 'leclerc' ||
      details?.driverId === 'mazepin' ||
      details?.driverId === 'norris' ||
      details?.driverId === 'ocon' ||
      details?.driverId === 'perez' ||
      details?.driverId === 'raikkonen' ||
      details?.driverId === 'ricciardo' ||
      details?.driverId === 'russell' ||
      details?.driverId === 'sainz' ||
      details?.driverId === 'mick_schumacher' ||
      details?.driverId === 'stroll' ||
      details?.driverId === 'tsunoda' ||
      details?.driverId === 'max_verstappen' ||
      details?.driverId === 'vettel';
  }
}
