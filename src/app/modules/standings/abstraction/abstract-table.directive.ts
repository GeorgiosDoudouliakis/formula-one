/* Place angular imports */
import {ChangeDetectorRef, Directive, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

/* Place RxJs imports */
import {Subscription} from "rxjs";

/* Place angular material imports */
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

/* Place service imports */
import {DriverConstructorStandingsService} from "../services/driver-constructor-standings.service";

@Directive()
export abstract class AbstractTableDirective<C> implements OnInit, OnDestroy {
  @ViewChild(MatSort) public sort: MatSort | null;
  public filterValue: string = '';
  public isLoading: boolean = false;
  public abstract displayedColumns: string[];
  public abstract dataSource: MatTableDataSource<any>;
  public abstract data: Array<C>;
  protected abstract standingsSub$: Subscription;

  constructor(
    protected driverConstructorStandingsService: DriverConstructorStandingsService,
    protected route: ActivatedRoute,
    protected cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.getTableData();
  }

  public ngOnDestroy(): void {
    if(this.standingsSub$) this.standingsSub$.unsubscribe();
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public initializeFilterAndSorting(): void {
    if(this.dataSource) {
      this.dataSource.filterPredicate = (data: any, filter) => this.predicate(data, filter);
      this.dataSource.sortingDataAccessor = (data: any, property: any) => this.dataAccessor(data, property);
      this.dataSource.sort = this.sort;
    }
  }

  protected abstract getTableData(): void;
  protected abstract predicate(data: any, filter: string): boolean;
  protected abstract dataAccessor(data: any, property: any): any;
}
