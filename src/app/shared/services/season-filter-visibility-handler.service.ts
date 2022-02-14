import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeasonFilterVisibilityHandlerService {
  private seasonFilterVisibility = new BehaviorSubject(true);
  seasonFilterVisibility$ = this.seasonFilterVisibility.asObservable();

  constructor() { }

  seasonFilterVisibilityHandler(visible: boolean) {
    this.seasonFilterVisibility.next(visible);
  }
}
