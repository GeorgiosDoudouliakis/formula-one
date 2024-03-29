/* Place angular imports */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place interface imports here */
import { Constructor } from '@shared/interfaces/constructor-driver.interface';
import { ConstructorData } from '@shared/interfaces/constructor-data.interface';

/* Place rxjs imports */
import { Observable, pluck } from 'rxjs';
import { map } from "rxjs/operators";

/* Place any other imports here */
import { environment } from 'src/environments/environment';

@Injectable()
export class ConstructorsService {
  constructor(private _http: HttpClient) { }

  public getConstructorDetails(constructorId: string): Observable<Constructor> {
    return this._http.get<ConstructorData>(`${environment.api}/constructors/${constructorId}.json`).pipe(
      pluck('MRData', 'ConstructorTable', 'Constructors'),
      map((constructors: Constructor[]) => constructors[0])
    );
  }

  public getConstructors(year: string): Observable<any> {
    return this._http.get<ConstructorData>(`${environment.api}/${year}/constructors.json`).pipe(pluck('MRData', 'ConstructorTable', 'Constructors'));
  }
}
