import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constructor } from '@shared/models/constructor-driver.model';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConstructorData } from '../models/constructor-data.model';

@Injectable()
export class ConstructorsService {

  constructor(private http: HttpClient) { }

  getConstructorDetails(constructorId: string): Observable<Constructor[]> {
    return this.http.get<ConstructorData>(`${environment.api}/constructors/${constructorId}.json`).pipe(
      pluck('MRData', 'ConstructorTable', 'Constructors')
    );
  }

  getConstructors(): Observable<any> {
    return this.http.get<ConstructorData>(`${environment.api}/2021/constructors.json`).pipe(pluck('MRData', 'ConstructorTable', 'Constructors'));
  }
}
