import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Circuit, CircuitData } from '../models/circuits.model';

@Injectable()
export class CircuitsService {

  constructor(private http: HttpClient) { }

  getCircuits(): Observable<Circuit[]> {
    return this.http.get<CircuitData>(`${environment.api}/2021/circuits.json`).pipe(pluck('MRData', 'CircuitTable', 'Circuits'));
  }
}
