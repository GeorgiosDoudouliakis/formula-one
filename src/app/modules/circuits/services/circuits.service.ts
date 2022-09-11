import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Circuit, CircuitData } from '../models/circuits.model';

@Injectable()
export class CircuitsService {

  constructor(private http: HttpClient) { }

  public getCircuits(year: string = '2021'): Observable<Circuit[]> {
    return this.http.get<CircuitData>(`${environment.api}/${year}/circuits.json`).pipe(pluck('MRData', 'CircuitTable', 'Circuits'));
  }
}
