import {ChangeDetectorRef, Directive, OnDestroy, OnInit} from '@angular/core';
import {Subscription, switchMap} from "rxjs";
import {map} from "rxjs/operators";
import {YearHandlerService} from "../../services";
import {ConstructorsService, DriversService} from "../../services";
import {Router} from "@angular/router";

type DataService = ConstructorsService | DriversService;

@Directive()
export abstract class AbstractDriversConstructorsDirective<DataType> implements OnInit, OnDestroy {
  public loading: boolean = false;
  public data: Array<DataType>;
  private _dataSub$: Subscription;
  public abstract imageExists(details: any): boolean;

  constructor(
    public router: Router,
    protected _yearHandlerService: YearHandlerService,
    protected _dataService: DataService,
    protected _cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this._yearHandlerService.yearHandler('2022');

    this.getDataByYear();
  }

  public ngOnDestroy(): void {
    if(this._dataSub$) this._dataSub$.unsubscribe();
  }

  private getDataByYear(): void {
    this._dataSub$ = this._yearHandlerService.year$.pipe(
      map((year: string) => {
        this.loading = true;
        return year;
      }),
      switchMap((year: string) => this._dataService.getData(year))
    ).subscribe({
      next: (data: Array<DataType>) => {
        this.loading = false;
        this.data = data;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.loading = false;
        this._cdr.markForCheck();
      },
      complete: () => {
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
}
