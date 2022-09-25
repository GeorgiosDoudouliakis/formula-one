import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Driver } from '@shared/models/constructor-driver.model';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class DriversService {
  private _currentYear = new Date().getFullYear().toString();

  constructor(private _http: HttpClient) { }

  public getData(year: string = this._currentYear): Observable<any> {
    return this._http.get<Driver[]>(`${environment.api}/${year}/drivers.json`)
    .pipe(pluck('MRData', 'DriverTable', 'Drivers'));
  }
}