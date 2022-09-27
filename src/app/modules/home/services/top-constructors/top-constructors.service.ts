/* Place angular imports */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

/* Place interface imports */
import { ConstructorStandings } from "@shared/interfaces/constructor-standings.interface";

/* Place any other imports here */
import { environment } from "../../../../../environments/environment";

/* Place rxjs imports */
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
