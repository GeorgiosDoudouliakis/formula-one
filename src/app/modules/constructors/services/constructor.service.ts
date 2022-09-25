import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constructor } from '@shared/models/constructor-driver.model';
import { Race, RoundStandings } from '@shared/models/round-standings.model';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConstructorData } from '@shared/models/constructor-data.model';

@Injectable()
export class ConstructorService {
  private _currentYear = new Date().getFullYear().toString();

  constructor(private _http: HttpClient) { }

  public getConstructorDetails(constructorId: string): Observable<Constructor[]> {
    return this._http.get<ConstructorData>(`${environment.api}/constructors/${constructorId}.json`).pipe(
      pluck('MRData', 'ConstructorTable', 'Constructors')
    );
  }

  public getConstructorResults(constructorId: string): Observable<Race[]> {
    return this._http.get<RoundStandings>(`${environment.api}/constructors/${constructorId}/results.json`).pipe(pluck('MRData', 'RaceTable', 'Races'));
  }

  public getData(year: string = this._currentYear): Observable<any> {
    return this._http.get<ConstructorData>(`${environment.api}/${year}/constructors.json`).pipe(pluck('MRData', 'ConstructorTable', 'Constructors'));
  }
}
