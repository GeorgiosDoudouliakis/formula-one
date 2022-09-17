import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Circuit, CircuitData } from '../models/circuits.model';

@Injectable()
export class CircuitsService {

  constructor(private http: HttpClient) { }

  public getCircuits(): Observable<Circuit[]> {
    const currentYear = new Date().getFullYear();
    return this.http.get<CircuitData>(`${environment.api}/${currentYear}/circuits.json`).pipe(pluck('MRData', 'CircuitTable', 'Circuits'));
  }
}
