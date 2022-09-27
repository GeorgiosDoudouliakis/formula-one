/* Place angular imports */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place rxjs imports */
import { Observable, pluck } from 'rxjs';

/* Place any other imports here */
import { environment } from 'src/environments/environment';

/* Place interface imports */
import { Circuit, CircuitData } from '../interfaces/circuits.interface';

@Injectable()
export class CircuitsService {

  constructor(private _http: HttpClient) { }

  public getCircuits(): Observable<Circuit[]> {
    const currentYear = new Date().getFullYear();
    return this._http.get<CircuitData>(`${environment.api}/${currentYear}/circuits.json`).pipe(pluck('MRData', 'CircuitTable', 'Circuits'));
  }
}
