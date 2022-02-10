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

  getDriverStandings(): Observable<DriverStandingsList[]> {
    return this.http.get<DriverStandings>(`${environment.api}/2021/driverStandings.json?limit=400&offset=0`)
               .pipe(pluck('MRData', 'StandingsTable', 'StandingsLists'));
  }

  getConstructorStandings(): Observable<any> {
    return this.http.get<ConstructorStandings>(`${environment.api}/2021/constructorStandings.json?limit=400&offset=0`)
               .pipe(pluck('MRData', 'StandingsTable', 'StandingsLists'))
             
  }
}