/* Place your angular */
import {AfterViewChecked, ChangeDetectionStrategy, Component} from '@angular/core';
import {Params} from "@angular/router";

/* Place RxJs imports */
import {catchError, map, switchMap, tap, throwError} from "rxjs";
import {takeUntil} from "rxjs/operators";

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
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<any>;
  public data: Array<DriverStanding> = [];

  public ngAfterViewChecked(): void {
    this.displayedColumns = ["position", "name", "constructor", "points", "wins"];
    this.initializeFilterAndSorting();
  }

  protected getTableData(): void {
    this.route.queryParams.pipe(
      tap(() => this.isLoading = true),
      tap(() => this.cdr.markForCheck()),
      switchMap((params: Params) => this.driverConstructorStandingsService.getDriverStandings(params['year'])),
      map((res: DriverStandingsList[]) => {
        if(!res[0]) return;
        this.data = res[0].DriverStandings;
        this.dataSource = new MatTableDataSource(this.data);
      }),
      tap(() => this.isLoading = false),
      tap(() => this.cdr.markForCheck()),
      catchError((err) => {
        this.isLoading = false;
        this.cdr.markForCheck();
        return throwError(err);
      }),
      takeUntil(this.destroy$)
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
