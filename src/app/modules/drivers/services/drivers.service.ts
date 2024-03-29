/* Place angular imports */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place interface imports */
import { Driver, DriverData } from '@shared/interfaces/constructor-driver.interface';

/* Place rxjs imports */
import { Observable, pluck } from 'rxjs';
import { map } from "rxjs/operators";

/* Place any other imports here */
import { environment } from 'src/environments/environment';

@Injectable()
export class DriversService {

  constructor(private _http: HttpClient) { }

  public getDriverDetails(driverId: string): Observable<Driver> {
    return this._http.get<DriverData>(`${environment.api}/drivers/${driverId}.json`).pipe(
      pluck('MRData', 'DriverTable', 'Drivers'),
      map((drivers: Driver[]) => drivers[0])
    );
  }

  public getDrivers(year: string): Observable<any> {
    return this._http.get<Driver[]>(`${environment.api}/${year}/drivers.json`)
      .pipe(pluck('MRData', 'DriverTable', 'Drivers'));
  }
}
