import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class YearHandlerService {
  private _currentYear = new Date().getFullYear().toString();
  private _year = new BehaviorSubject(this._currentYear);
  public year$ = this._year.asObservable();

  constructor() { }

  public yearHandler(year: string): void {
    this._year.next(year);
  }
}
