/* Place angular imports */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place model imports */
import { Race, RoundStandings } from '@shared/models/round-standings.model';

/* Place rxjs imports */
import { Observable, pluck } from 'rxjs';

/* Place any other imports here */
import { environment } from 'src/environments/environment';

@Injectable()
export class ScheduleService {
  constructor(private _http: HttpClient) { }

  public getSchedule(): Observable<Race[]> {
    return this._http.get<RoundStandings>(`${environment.api}/current.json`).pipe(pluck('MRData', 'RaceTable', 'Races'));
  }
}
