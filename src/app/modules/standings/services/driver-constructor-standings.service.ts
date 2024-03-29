/* Place angular imports */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place interface imports */
import { DriverStandings, DriverStandingsList } from '@shared/interfaces/driver-standings.interface';
import { ConstructorStandings } from '@shared/interfaces/constructor-standings.interface';

/* Place rxjs imports */
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

/* Place any other imports here */
import { environment } from 'src/environments/environment';

@Injectable()
export class DriverConstructorStandingsService {
  constructor(private _http: HttpClient) { }

  public getDriverStandings(year: string): Observable<DriverStandingsList[]> {
    return this._http.get<DriverStandings>(`${environment.api}/${year}/driverStandings.json?limit=400&offset=0`)
               .pipe(pluck('MRData', 'StandingsTable', 'StandingsLists'));
  }

  public getConstructorStandings(year: string ): Observable<any> {
    return this._http.get<ConstructorStandings>(`${environment.api}/${year}/constructorStandings.json?limit=400&offset=0`)
               .pipe(pluck('MRData', 'StandingsTable', 'StandingsLists'));
  }
}
