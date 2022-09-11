import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YearHandlerService {
  private year = new BehaviorSubject(new Date().getFullYear().toString());
  year$ = this.year.asObservable();

  constructor() { }

  yearHandler(year: string) {
    this.year.next(year);
  }
}
