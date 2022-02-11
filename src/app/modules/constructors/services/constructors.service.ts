import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constructor } from '@shared/models/constructor-driver.model';
import { Race, RoundStandings } from '@shared/models/round-standings.model';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConstructorData } from '../models/constructor-data.model';

@Injectable({
  providedIn: 'root'
})
export class ConstructorsService {

  constructor(private http: HttpClient) { }

  getConstructorDetails(constructorId: string): Observable<Constructor[]> {
    return this.http.get<ConstructorData>(`${environment.api}/constructors/${constructorId}.json`).pipe(
      pluck('MRData', 'ConstructorTable', 'Constructors')
    );
  }

  getConstructorResults(constructorId: string): Observable<Race[]> {
    return this.http.get<RoundStandings>(`${environment.api}/2021/constructors/${constructorId}/results.json`).pipe(pluck('MRData', 'RaceTable', 'Races'));
  }

  getConstructors(): Observable<any> {
    return this.http.get<ConstructorData>(`${environment.api}/2021/constructors.json`).pipe(pluck('MRData', 'ConstructorTable', 'Constructors'));
  }
}
