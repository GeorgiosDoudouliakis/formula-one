/* Place angular imports */
import {ChangeDetectorRef, Directive, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

/* Place rxjs imports */
import {Subscription} from "rxjs";

/* Place angular material imports here */
import {MatDialog} from "@angular/material/dialog";

@Directive()
export abstract class AbstractDriversConstructorsDirective<C> implements OnInit, OnDestroy {
  public abstract selectedYear: string;
  public abstract loading: boolean;
  public abstract data: Array<C>;
  protected abstract _dataSub$: Subscription;

  constructor(
    public dialog: MatDialog,
    protected _route: ActivatedRoute,
    protected _cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.getDataByYear();
  }

  public ngOnDestroy(): void {
    if(this._dataSub$) this._dataSub$.unsubscribe();
  }

  public abstract openDetails(id: string): void;
  public abstract imageExists(details: any): boolean;
  protected abstract getDataByYear(): void;
}
