import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YearHandlerService {
  private year = new BehaviorSubject('2021');
  year$ = this.year.asObservable();

  constructor() { }

  yearHandler(year: string) {
    this.year.next(year);
  }
}
