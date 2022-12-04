/* Place angular imports */
import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

/* Place RxJs imports here */
import {catchError, Subscription, switchMap, tap, throwError} from "rxjs";
import {map} from "rxjs/operators";

/* Place component imports here */
import {ConstructorDetailsComponent} from "../../components/constructor-details/constructor-details.component";

/* Place interface imports */
import {Constructor} from '@shared/interfaces/constructor-driver.interface';

/* Place service imports */
import {ConstructorsService} from '../../services/constructors.service';

/* Place angular material imports here */
import {MatDialog} from "@angular/material/dialog";

/* Place any other imports here */
import {AbstractDriversConstructorsDirective} from "@shared/abstraction/drivers-constructors/abstract-drivers-constructors.directive";

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstructorsComponent extends AbstractDriversConstructorsDirective<Constructor> {
  public selectedYear: string;
  public loading: boolean = false;
  public data: Array<Constructor>;
  protected _dataSub$: Subscription;

  constructor(
    public override dialog: MatDialog,
    protected override _route: ActivatedRoute,
    protected override _cdr: ChangeDetectorRef,
    private _constructorsService: ConstructorsService,
  ) {
    super(dialog, _route, _cdr);
  }

  public openDetails(id: string): void {
    this.dialog.open(ConstructorDetailsComponent, {
      data: { id },
      minWidth: '330px',
      minHeight: '240px'
    });
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

  protected override getDataByYear(): void {
    this._dataSub$ = this._route.queryParams.pipe(
      tap(() => this.loading = true),
      switchMap((params: Params) => {
        this.selectedYear = params['year'];
        return this._constructorsService.getConstructors(this.selectedYear)
      }),
      map((data: Array<Constructor>) => this.data = data),
      tap(() => this.loading = false),
      tap(() => this._cdr.markForCheck()),
      catchError((error)=> {
        console.error(error);
        return throwError(error);
      })
    ).subscribe();
  }
}
