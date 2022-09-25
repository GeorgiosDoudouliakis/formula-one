import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ConstructorStandings } from "@shared/models/constructor-standings.model";
import { environment } from "../../../../../environments/environment";
import { pluck } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class TopConstructorsService {

  constructor(private _http: HttpClient) { }

  public getTopConstructors(): Observable<any> {
    return this._http.get<ConstructorStandings>(`${environment.api}/current/constructorStandings.json?limit=3&offset=0`)
      .pipe(pluck('MRData', 'StandingsTable', 'StandingsLists'))
  }
}
