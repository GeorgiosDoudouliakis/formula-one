import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConstructorStandingsList, ConstructorStanding } from '@shared/models/constructor-standings.model';
import { DriverStandingsList, DriverStanding } from '@shared/models/driver-standings.model';
import { YearHandlerService } from '@shared/services/year-handler.service';
import { Subscription, switchMap } from 'rxjs';
import { DriverConstructorStandingsService } from '../../services/driver-constructor-standings.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  @Input() option: 'Driver' | 'Constructor';
  @ViewChild(MatSort) sort: MatSort | null;
  filterValue: string = '';
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  data: DriverStanding[] | ConstructorStanding[] = [];
  private standingsSub$: Subscription;

  constructor(
    private yearHandlerService: YearHandlerService,
    private driverConstructorStandingsService: DriverConstructorStandingsService,
    private router: Router
  ) {}
  
  ngOnChanges() {
    this.displayedColumns = [];
    this.data = [];
    this.dataSource = new MatTableDataSource();
    this.filterValue = '';
    this.tableDataSource();
  }

  ngOnInit(): void {}
  
  ngOnDestroy() {
    this.standingsSub$?.unsubscribe();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  showDetails(row: any) {
    if(this.option === 'Driver') {
      this.router.navigate(['/drivers', row['Driver']['driverId']]);
    } else if(this.option === 'Constructor') {
      this.router.navigate(['/constructors', row['Constructor']['constructorId']]);
    }
  }

  private tableDataSource() {
    if(this.option === 'Driver') {
      this.standingsSub$ = this.yearHandlerService.year$.pipe(
        switchMap((year: string) => this.driverConstructorStandingsService.getDriverStandings(year))
      )
      .subscribe((res: DriverStandingsList[]) => {
        if(!res[0]) return; 
        this.data = res[0].DriverStandings;
        this.dataSource = new MatTableDataSource(this.data);
        this.displayedColumns = ["position", "name", "constructor", "points", "wins"];
        this.dataSource.filterPredicate = (data: DriverStanding, filter) => this.predicate(data, filter);
        this.dataSource.sortingDataAccessor = (data: any, property: any) => this.dataAccessor(data, property);
        this.dataSource.sort = this.sort;
      })  
    } else if(this.option === 'Constructor') {
      this.standingsSub$ = this.yearHandlerService.year$.pipe(
        switchMap((year: string) => this.driverConstructorStandingsService.getConstructorStandings(year))
      )
      .subscribe((res: ConstructorStandingsList[]) => {
        if(!res[0]) return;
        this.data = res[0].ConstructorStandings;
        this.dataSource = new MatTableDataSource(this.data);
        this.displayedColumns = ["position", "constructor", "nationality", "points", "wins"];
        this.dataSource.filterPredicate = (data: ConstructorStanding, filter) => this.predicate(data, filter);
        this.dataSource.sortingDataAccessor = (data: any, property: any) => this.dataAccessor(data, property);
        this.dataSource.sort = this.sort;
      })  
    }
  }

  private predicate(data: any, filter: string) {
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

  private dataAccessor(data: any, property: any) {
    if(this.option === 'Driver') {
      switch(property) {
        case 'name': return data['Driver']['givenName'] + " " + data['Driver']['familyName'];
        case 'constructor': return data['Constructors'][0]['name'];
        default: return +data[property];
      }
    } else if(this.option === 'Constructor') {
      switch(property) {
        case 'constructor': return data['Constructor']['name'];
        case 'nationality': return data['Constructor']['nationality'];
        default: return +data[property];
      }
    }
  }
}