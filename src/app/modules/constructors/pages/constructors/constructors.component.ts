/* Place angular imports */
import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

/* Place RxJs imports here */
import {catchError, Subscription, switchMap, tap, throwError} from "rxjs";
import {map} from "rxjs/operators";

/* Place interface imports */
import {Constructor} from '@shared/interfaces/constructor-driver.interface';

/* Place service imports */
import {ConstructorsService} from '../../services/constructors.service';

/* Place any other imports here */
import {AbstractDriversConstructorsDirective} from "@shared/abstraction";

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstructorsComponent extends AbstractDriversConstructorsDirective<Constructor> {
  public loading: boolean = false;
  public data: Array<Constructor>;
  protected _dataSub$: Subscription;

  constructor(
    public override router: Router,
    protected override _route: ActivatedRoute,
    protected override _cdr: ChangeDetectorRef,
    private _constructorsService: ConstructorsService,
  ) {
    super(router, _route, _cdr);
  }

  protected override getDataByYear(): void {
    this._dataSub$ = this._route.queryParams.pipe(
      tap(() => this.loading = true),
      switchMap((params: Params) => this._constructorsService.getConstructors(params['year'])),
      map((data: Array<Constructor>) => this.data = data),
      tap(() => this.loading = false),
      tap(() => this._cdr.markForCheck()),
      catchError((error)=> {
        console.error(error);
        return throwError(error);
      })
    ).subscribe();
  }

  public imageExists(details: any): boolean {
    return  details?.constructorId === 'alphatauri' ||
      details?.constructorId === 'alfa' ||
      details?.constructorId === 'alpine' ||
      details?.constructorId === 'aston_martin' ||
      details?.constructorId === 'ferrari' ||
      details?.constructorId === 'haas' ||
      details?.constructorId === 'mclaren' ||
      details?.constructorId === 'mercedes' ||
      details?.constructorId === 'red_bull' ||
      details?.constructorId === 'williams';
  }
}
