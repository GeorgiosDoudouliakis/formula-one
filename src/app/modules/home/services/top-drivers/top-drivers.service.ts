/* Place angular imports */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

/* Place model imports */
import { DriverStandings, DriverStandingsList } from "@shared/models/driver-standings.model";

/* Place any other imports here */
import { environment } from "../../../../../environments/environment";

/* Place rxjs imports */
import { pluck } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class TopDriversService {

  constructor(private _http: HttpClient) { }

  public getTopDrivers(): Observable<DriverStandingsList[]> {
    return this._http.get<DriverStandings>(`${environment.api}/current/driverStandings.json?limit=3&offset=0`)
      .pipe(pluck('MRData', 'StandingsTable', 'StandingsLists'));
  }
}
