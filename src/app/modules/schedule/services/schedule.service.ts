import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Race, RoundStandings } from '@shared/models/round-standings.model';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ScheduleService {

  constructor(private http: HttpClient) { }

  public getSchedule(year: string = '2021'): Observable<Race[]> {
    return this.http.get<RoundStandings>(`${environment.api}/${year}.json`).pipe(pluck('MRData', 'RaceTable', 'Races'));
  }
}
