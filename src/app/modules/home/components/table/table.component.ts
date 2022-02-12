import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConstructorStandingsList, ConstructorStanding } from '@shared/models/constructor-standings.model';
import { DriverStandingsList, DriverStanding } from '@shared/models/driver-standings.model';
import { Subscription } from 'rxjs';
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
    private driverConstructorStandingsService: DriverConstructorStandingsService,
    private router: Router
  ) {}
  
  ngOnChanges() {
    this.displayedColumns = [];
    this.data = [];
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
      this.standingsSub$ = this.driverConstructorStandingsService.getDriverStandings()
        .subscribe((res: DriverStandingsList[]) => { 
          this.data = res[0].DriverStandings;
          this.dataSource = new MatTableDataSource(this.data);
          this.displayedColumns = ["position", "name", "constructor", "points", "wins"];
          this.dataSource.filterPredicate = (data: DriverStanding, filter) => this.predicate(data, filter);
          this.dataSource.sort = this.sort;
        });
    } else if(this.option === 'Constructor') {
      this.standingsSub$ = this.driverConstructorStandingsService.getConstructorStandings()
        .subscribe((res: ConstructorStandingsList[]) => {
          this.data = res[0].ConstructorStandings;
          this.dataSource = new MatTableDataSource(this.data);
          this.displayedColumns = ["position", "constructor", "nationality", "points", "wins"];
          this.dataSource.filterPredicate = (data: ConstructorStanding, filter) => this.predicate(data, filter);
          this.dataSource.sort = this.sort;
        });
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
}