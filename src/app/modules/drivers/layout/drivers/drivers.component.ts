/* Place angular imports */
import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

/* Place RxJs imports */
import {catchError, Subscription, switchMap, tap, throwError} from "rxjs";
import {map} from "rxjs/operators";

/* Place component imports here */
import {DriverDetailsComponent} from "../../components/driver-details/driver-details.component";

/* Place interface imports */
import {Driver} from '@shared/interfaces/constructor-driver.interface';

/* Place service imports */
import {DriversService} from "../../services/drivers.service";

/* Place angular material imports here */
import {MatDialog} from '@angular/material/dialog';

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
  protected dataSub$: Subscription;

  constructor(
    public override dialog: MatDialog,
    protected override route: ActivatedRoute,
    protected override cdr: ChangeDetectorRef,
    private _driversService: DriversService
  ) {
    super(dialog, route, cdr);
  }

  public openDetails(id: string): void {
    this.dialog.open(DriverDetailsComponent, {
      data: { id },
      minWidth: '330px',
      minHeight: '280px'
    });
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

  protected override getDataByYear(): void {
    this.dataSub$ = this.route.queryParams.pipe(
      tap(() => this.loading = true),
      switchMap((params: Params) => {
        this.selectedYear = params['year'];
        return this._driversService.getDrivers(this.selectedYear)
      }),
      map((data: Array<Driver>) => this.data = data),
      tap(() => this.loading = false),
      tap(() => this.cdr.markForCheck()),
      catchError((error)=> {
        console.error(error);
        return throwError(error);
      })
    ).subscribe();
  }
}
