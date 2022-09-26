/* Place angular imports */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place model imports */
import { Driver, DriverData } from '@shared/models/constructor-driver.model';
import { Race, RoundStandings } from '@shared/models/round-standings.model';

/* Place rxjs imports */
import { Observable, pluck } from 'rxjs';

/* Place any other imports here */
import { environment } from 'src/environments/environment';

@Injectable()
export class DriverService {

  constructor(private http: HttpClient) { }

  public getDriverDetails(driverId: string): Observable<Driver[]> {
    return this.http.get<DriverData>(`${environment.api}/drivers/${driverId}.json`).pipe(
      pluck('MRData', 'DriverTable', 'Drivers')
    );
  }

  public getDriverResults(driverId: string): Observable<Race[]> {
    return this.http.get<RoundStandings>(`${environment.api}/drivers/${driverId}/results.json`).pipe(pluck('MRData', 'RaceTable', 'Races'));
  }
}
