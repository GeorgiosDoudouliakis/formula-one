import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DriverStandings, DriverStandingsList } from '@shared/models/driver-standings.model';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ConstructorStandings } from '@shared/models/constructor-standings.model';

@Injectable()
export class DriverConstructorStandingsService {

  constructor(private http: HttpClient) { }

  getDriverStandings(year: string = '2021'): Observable<DriverStandingsList[]> {
    return this.http.get<DriverStandings>(`${environment.api}/${year}/driverStandings.json?limit=400&offset=0`)
               .pipe(pluck('MRData', 'StandingsTable', 'StandingsLists'));
  }

  getConstructorStandings(year: string = '2021'): Observable<any> {
    return this.http.get<ConstructorStandings>(`${environment.api}/${year}/constructorStandings.json?limit=400&offset=0`)
               .pipe(pluck('MRData', 'StandingsTable', 'StandingsLists'))
             
  }
}