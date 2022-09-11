import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YearHandlerService {
  private year = new BehaviorSubject(new Date().getFullYear().toString());
  public year$ = this.year.asObservable();

  constructor() { }

  public yearHandler(year: string): void {
    this.year.next(year);
  }
}
