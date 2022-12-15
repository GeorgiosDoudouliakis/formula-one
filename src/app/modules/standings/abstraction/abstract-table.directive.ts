/* Place angular imports */
import {ChangeDetectorRef, Directive, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

/* Place angular material imports */
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

/* Place service imports */
import {DriverConstructorStandingsService} from "../services/driver-constructor-standings.service";

/* Place any other imports here */
import {UnsubscribeUtility} from "@core/unsubscribe-utility.directive";

@Directive()
export abstract class AbstractTableDirective<C> extends UnsubscribeUtility implements OnInit {
  @ViewChild(MatSort) public sort: MatSort | null;
  public filterValue: string = '';
  public isLoading: boolean = false;
  public abstract displayedColumns: string[];
  public abstract dataSource: MatTableDataSource<any>;
  public abstract data: Array<C>;

  constructor(
    protected driverConstructorStandingsService: DriverConstructorStandingsService,
    protected route: ActivatedRoute,
    protected cdr: ChangeDetectorRef
  ) {
    super();
  }

  public ngOnInit(): void {
    this.getTableData();
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
