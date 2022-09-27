/* Place angular imports */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place interface imports */
import { Driver } from '@shared/interfaces/constructor-driver.interface';

/* Place rxjs imports */
import { Observable, pluck } from 'rxjs';

/* Place any other imports here */
import { environment } from 'src/environments/environment';

@Injectable()
export class DriversService {
  constructor(private _http: HttpClient) { }

  public getData(year: string): Observable<any> {
    return this._http.get<Driver[]>(`${environment.api}/${year}/drivers.json`)
    .pipe(pluck('MRData', 'DriverTable', 'Drivers'));
  }
}
