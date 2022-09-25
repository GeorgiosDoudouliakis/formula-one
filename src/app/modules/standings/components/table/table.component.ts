import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ConstructorStanding, ConstructorStandingsList} from '@shared/models/constructor-standings.model';
import {DriverStanding, DriverStandingsList} from '@shared/models/driver-standings.model';
import {catchError, map, Subscription, switchMap, tap, throwError} from 'rxjs';
import {DriverConstructorStandingsService} from '../../services/driver-constructor-standings.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements AfterViewChecked, OnDestroy {
  @Input() public option: 'Driver' | 'Constructor';
  @ViewChild(MatSort) public sort: MatSort | null;
  public isLoading: boolean = false;
  public filterValue: string = '';
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<any>;
  public data: DriverStanding[] | ConstructorStanding[] = [];
  private _standingsSub$: Subscription;

  constructor(
    private _driverConstructorStandingsService: DriverConstructorStandingsService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {}

  public ngOnChanges(): void {
    this.isLoading = false;
    this.displayedColumns = [];
    this.data = [];
    this.dataSource = new MatTableDataSource();
    this.filterValue = '';
    this.tableDataSource();
  }

  public ngAfterViewChecked(): void {
    if(this.option === 'Driver') {
      this.displayedColumns = ["position", "name", "constructor", "points", "wins"];
    } else {
      this.displayedColumns = ["position", "constructor", "nationality", "points", "wins"];
    }

    this.dataSource.filterPredicate = (data: any, filter) => this.predicate(data, filter);
    this.dataSource.sortingDataAccessor = (data: any, property: any) => this.dataAccessor(data, property);
    this.dataSource.sort = this.sort;
  }

  public ngOnDestroy(): void {
    if(this._standingsSub$) this._standingsSub$.unsubscribe();
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public showDetails(row: any): void {
    if(this.option === 'Driver') {
      this._router.navigate(['/drivers', row['Driver']['driverId']]);
    } else if(this.option === 'Constructor') {
      this._router.navigate(['/constructors', row['Constructor']['constructorId']]);
    }
  }

  private tableDataSource(): void {
    if(this.option === 'Driver') {
      this._standingsSub$ = this._route.queryParams.pipe(
        tap(() => this.isLoading = true),
        tap(() => this._cdr.markForCheck()),
        switchMap((params: Params) => this._driverConstructorStandingsService.getDriverStandings(params['year'])),
        tap(() => this.isLoading = false),
        map((res: DriverStandingsList[]) => {
          if(!res[0]) return;
          this.data = res[0].DriverStandings;
          this.dataSource = new MatTableDataSource(this.data);
        }),
        tap(() => this._cdr.markForCheck()),
        catchError((err) => {
          console.error(err);
          return throwError(err);
        })
      ).subscribe();
    } else if(this.option === 'Constructor') {
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
  }

  private predicate(data: any, filter: string): boolean {
    let convertedData:string[] = [data['position'], data['points'], data['wins']];

    if(this.option === 'Driver') {
      convertedData = [
        ...convertedData,
        data['Driver']['givenName'] + " " + data['Driver']['familyName'],
        data['Constructors'][0]['name']
      ];
    } else if(this.option === 'Constructor') {
      convertedData = [
        ...convertedData,
        data['Constructor']['name'],
        data['Constructor']['nationality']
      ];
    }

    return convertedData.toString().toLowerCase().includes(filter);
  }

  private dataAccessor(data: any, property: any): any {
    if(this.data && this.option === 'Driver') {
      switch(property) {
        case 'name': return data['Driver']['givenName'] + " " + data['Driver']['familyName'];
        case 'constructor': return data['Constructors'][0]['name'];
        default: return +data[property];
      }
    } else if(this.data && this.option === 'Constructor') {
      switch(property) {
        case 'constructor': return data['Constructor']['name'];
        case 'nationality': return data['Constructor']['nationality'];
        default: return +data[property];
      }
    }
  }
}
