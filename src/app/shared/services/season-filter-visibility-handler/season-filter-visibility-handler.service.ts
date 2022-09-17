import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeasonFilterVisibilityHandlerService {
  private seasonFilterVisibility = new BehaviorSubject(false);
  public seasonFilterVisibility$ = this.seasonFilterVisibility.asObservable();

  constructor() { }

  public seasonFilterVisibilityHandler(visible: boolean): void {
    this.seasonFilterVisibility.next(visible);
  }
}
