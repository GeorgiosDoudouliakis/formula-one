/* Place angular imports */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place interface imports */
import { Driver, DriverData } from '@shared/interfaces/constructor-driver.interface';
import { Race, RoundStandings } from '@shared/interfaces/round-standings.interface';

/* Place rxjs imports */
import { Observable, pluck } from 'rxjs';

/* Place any other imports here */
import { environment } from 'src/environments/environment';

@Injectable()
export class DriversService {

  constructor(private _http: HttpClient) { }

  public getDriverDetails(driverId: string): Observable<Driver[]> {
    return this._http.get<DriverData>(`${environment.api}/drivers/${driverId}.json`).pipe(
      pluck('MRData', 'DriverTable', 'Drivers')
    );
  }

  public getDrivers(year: string): Observable<any> {
    return this._http.get<Driver[]>(`${environment.api}/${year}/drivers.json`)
      .pipe(pluck('MRData', 'DriverTable', 'Drivers'));
  }
}
