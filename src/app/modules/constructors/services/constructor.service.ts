/* Place angular imports */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place model imports here */
import { Constructor } from '@shared/models/constructor-driver.model';
import { Race, RoundStandings } from '@shared/models/round-standings.model';
import { ConstructorData } from '@shared/models/constructor-data.model';

/* Place rxjs imports */
import { Observable, pluck } from 'rxjs';

/* Place any other imports here */
import { environment } from 'src/environments/environment';

@Injectable()
export class ConstructorService {
  constructor(private _http: HttpClient) { }

  public getConstructorDetails(constructorId: string): Observable<Constructor[]> {
    return this._http.get<ConstructorData>(`${environment.api}/constructors/${constructorId}.json`).pipe(
      pluck('MRData', 'ConstructorTable', 'Constructors')
    );
  }

  public getConstructorResults(constructorId: string): Observable<Race[]> {
    return this._http.get<RoundStandings>(`${environment.api}/constructors/${constructorId}/results.json`).pipe(pluck('MRData', 'RaceTable', 'Races'));
  }
}