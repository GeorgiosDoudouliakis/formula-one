import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConstructorData } from '../../models/constructor-data.model';

@Injectable()
export class ConstructorsService {
  private _currentYear = new Date().getFullYear().toString();

  constructor(private _http: HttpClient) { }

  public getData(year: string = this._currentYear): Observable<any> {
    return this._http.get<ConstructorData>(`${environment.api}/${year}/constructors.json`).pipe(pluck('MRData', 'ConstructorTable', 'Constructors'));
  }
}
