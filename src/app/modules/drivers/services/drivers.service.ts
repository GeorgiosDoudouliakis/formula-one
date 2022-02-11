import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Driver, DriverData } from '@shared/models/constructor-driver.model';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Race, RoundStandings } from '@shared/models/round-standings.model';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private http: HttpClient) { }

  getDriverDetails(driverId: string): Observable<Driver[]> {
    return this.http.get<DriverData>(`${environment.api}/drivers/${driverId}.json`).pipe(
      pluck('MRData', 'DriverTable', 'Drivers')
    );
  }

  getDriverResults(driverId: string): Observable<Race[]> {
    return this.http.get<RoundStandings>(`${environment.api}/2021/drivers/${driverId}/results.json`).pipe(pluck('MRData', 'RaceTable', 'Races'));
  }

  getDrivers(): Observable<any> {
    return this.http.get<Driver[]>(`${environment.api}/2021/drivers.json`)
    .pipe(pluck('MRData', 'DriverTable', 'Drivers'));
  }
}
