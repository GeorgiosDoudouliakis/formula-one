import {ChangeDetectorRef, Directive, OnDestroy, OnInit} from '@angular/core';
import {catchError, Subscription, switchMap, tap, throwError} from "rxjs";
import {map} from "rxjs/operators";
import {ConstructorsService, DriversService} from "../../services";
import {ActivatedRoute, Params, Router} from "@angular/router";

type DataService = ConstructorsService | DriversService;

@Directive()
export abstract class AbstractDriversConstructorsDirective<DataType> implements OnInit, OnDestroy {
  public loading: boolean = false;
  public data: Array<DataType>;
  private _dataSub$: Subscription;
  public abstract imageExists(details: any): boolean;

  constructor(
    public router: Router,
    protected _dataService: DataService,
    protected _route: ActivatedRoute,
    protected _cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this._dataSub$ = this._route.queryParams.pipe(
      tap(() => this.loading = true),
      switchMap((params: Params) => this._dataService.getData(params['year'])),
      map((data: Array<DataType>) => this.data = data),
      tap(() => this.loading = false),
      tap(() => this._cdr.markForCheck()),
      catchError((error)=> {
        console.error(error);
        return throwError(error);
      })
    ).subscribe();
  }

  public ngOnDestroy(): void {
    if(this._dataSub$) this._dataSub$.unsubscribe();
  }
}
