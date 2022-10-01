import {AfterViewChecked, ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractTableDirective} from "../../abstraction/abstract-table.directive";
import {ConstructorStanding, ConstructorStandingsList} from "@shared/interfaces/constructor-standings.interface";
import {MatTableDataSource} from "@angular/material/table";
import {catchError, map, Subscription, switchMap, tap, throwError} from "rxjs";
import {Params} from "@angular/router";

@Component({
  selector: 'app-constructors-table',
  templateUrl: './constructors-table.component.html',
  styleUrls: ['./constructors-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstructorsTableComponent extends AbstractTableDirective<ConstructorStanding> implements AfterViewChecked {
  public isLoading: boolean = false;
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<any>;
  public data: Array<ConstructorStanding> = [];
  protected _standingsSub$: Subscription;

  public ngAfterViewChecked(): void {
    this.displayedColumns = ["position", "constructor", "nationality", "points", "wins"];
    this.initializeFilterAndSorting();
  }

  public showDetails(row: any): void {
    this._router.navigate(['/constructors', row['Constructor']['constructorId']]);
  }

  protected getTableData(): void {
    this._standingsSub$ = this._route.queryParams.pipe(
      tap(() => this.isLoading = true),
      tap(() => this._cdr.markForCheck()),
      switchMap((params: Params) => this._driverConstructorStandingsService.getConstructorStandings(params['year'])),
      tap(() => this.isLoading = false),
      map((res: ConstructorStandingsList[]) => {
        if(!res[0]) return;
        this.data = res[0].ConstructorStandings;
        this.dataSource = new MatTableDataSource(this.data);
      }),
      tap(() => this._cdr.markForCheck()),
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
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
