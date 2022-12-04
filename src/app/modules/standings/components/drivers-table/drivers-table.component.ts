/* Place your angular */
import {AfterViewChecked, ChangeDetectionStrategy, Component} from '@angular/core';
import {Params} from "@angular/router";

/* Place RxJs imports */
import {catchError, map, Subscription, switchMap, tap, throwError} from "rxjs";

/* Place any other imports */
import {AbstractTableDirective} from "../../abstraction/abstract-table.directive";

/*  Place angular material imports */
import {MatTableDataSource} from "@angular/material/table";

/* Place interface imports */
import {DriverStanding, DriverStandingsList} from "@shared/interfaces/driver-standings.interface";

@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriversTableComponent extends AbstractTableDirective<DriverStanding> implements AfterViewChecked {
  public isLoading: boolean = false;
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<any>;
  public data: Array<DriverStanding> = [];
  protected standingsSub$: Subscription;

  public ngAfterViewChecked(): void {
    this.displayedColumns = ["position", "name", "constructor", "points", "wins"];
    this.initializeFilterAndSorting();
  }

  public showDetails(row: any): void {
    this.router.navigate(['/drivers', row['Driver']['driverId']]);
  }

  protected getTableData(): void {
    this.standingsSub$ = this.route.queryParams.pipe(
      tap(() => this.isLoading = true),
      tap(() => this.cdr.markForCheck()),
      switchMap((params: Params) => this.driverConstructorStandingsService.getDriverStandings(params['year'])),
      tap(() => this.isLoading = false),
      map((res: DriverStandingsList[]) => {
        if(!res[0]) return;
        this.data = res[0].DriverStandings;
        this.dataSource = new MatTableDataSource(this.data);
      }),
      tap(() => this.cdr.markForCheck()),
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    ).subscribe();
  }

  protected predicate(data: any, filter: string): boolean {
    const convertedData: string[] = [
      data['position'], data['points'], data['wins'],
      data['Driver']['givenName'] + " " + data['Driver']['familyName'],
      data['Constructors'][0]['name']
    ];

    return convertedData.toString().toLowerCase().includes(filter);
  }

  protected dataAccessor(data: any, property: any): any {
    if (this.data) {
      switch (property) {
        case 'name':
          return data['Driver']['givenName'] + " " + data['Driver']['familyName'];
        case 'constructor':
          return data['Constructors'][0]['name'];
        default:
          return +data[property];
      }
    }
  }
}
