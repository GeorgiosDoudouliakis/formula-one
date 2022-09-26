/* Place angular imports */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place rxjs imports */
import { Observable, pluck } from 'rxjs';

/* Place any other imports here */
import { environment } from 'src/environments/environment';

/* Place model imports */
import { ConstructorData } from '../../models/constructor-data.model';

@Injectable()
export class ConstructorsService {
  constructor(private _http: HttpClient) { }

  public getData(year: string): Observable<any> {
    return this._http.get<ConstructorData>(`${environment.api}/${year}/constructors.json`).pipe(pluck('MRData', 'ConstructorTable', 'Constructors'));
  }
}
