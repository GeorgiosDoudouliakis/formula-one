/* Place angular imports */
import {AfterViewChecked, ChangeDetectionStrategy, Component} from '@angular/core';
import {Params} from "@angular/router";

/* Place RxJs imports */
import {catchError, map, switchMap, tap, throwError} from "rxjs";
import {takeUntil} from "rxjs/operators";

/* Place angular material imports */
import {MatTableDataSource} from "@angular/material/table";

/* Place interface imports */
import {ConstructorStanding, ConstructorStandingsList} from "@shared/interfaces/constructor-standings.interface";

/* Place any other imports */
import {AbstractTableDirective} from "../../abstraction/abstract-table.directive";

@Component({
  selector: 'app-constructors-table',
  templateUrl: './constructors-table.component.html',
  styleUrls: ['./constructors-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstructorsTableComponent extends AbstractTableDirective<ConstructorStanding> implements AfterViewChecked {
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<any>;
  public data: Array<ConstructorStanding> = [];

  public ngAfterViewChecked(): void {
    this.displayedColumns = ["position", "constructor", "nationality", "points", "wins"];
    this.initializeFilterAndSorting();
  }

  protected getTableData(): void {
    this.route.queryParams.pipe(
      tap(() => this.isLoading = true),
      tap(() => this.cdr.markForCheck()),
      switchMap((params: Params) => this.driverConstructorStandingsService.getConstructorStandings(params['year'])),
      map((res: ConstructorStandingsList[]) => {
        if(!res[0]) return;
        this.data = res[0].ConstructorStandings;
        this.dataSource = new MatTableDataSource(this.data);
      }),
      tap(() => this.isLoading = false),
      tap(() => this.cdr.markForCheck()),
      catchError((err) => {
        this.isLoading = false;
        this.cdr.markForCheck();
        console.error(err);
        return throwError(err);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  protected predicate(data: any, filter: string): boolean {
    const convertedData: string[] = [
      data['position'], data['points'], data['wins'],
      data['Constructor']['name'],
      data['Constructor']['nationality']
    ];

    return convertedData.toString().toLowerCase().includes(filter);
  }

  protected dataAccessor(data: any, property: any): any {
    if (this.data) {
      switch(property) {
        case 'constructor': return data['Constructor']['name'];
        case 'nationality': return data['Constructor']['nationality'];
        default: return +data[property];
      }
    }
  }
}
