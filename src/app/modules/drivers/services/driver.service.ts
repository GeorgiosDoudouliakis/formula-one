import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Driver, DriverData } from '../../../shared/models/constructor-driver.model';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class DriverService {

  constructor(private http: HttpClient) { }

  getDriverDetails(driverId: string): Observable<Driver[]> {
    return this.http.get<DriverData>(`${environment.api}/drivers/${driverId}.json`).pipe(
      pluck('MRData', 'DriverTable', 'Drivers')
    );
  }
}
