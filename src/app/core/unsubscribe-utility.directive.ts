/* Place angular imports here */
import {Directive, OnDestroy} from '@angular/core';

/* Place RxJs imports here */
import {Subject} from "rxjs";

@Directive()
export abstract class UnsubscribeUtility implements OnDestroy {
  protected destroy$ = new Subject();

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
