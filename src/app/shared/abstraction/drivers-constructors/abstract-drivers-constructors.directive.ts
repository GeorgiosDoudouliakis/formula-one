/* Place angular imports */
import {ChangeDetectorRef, Directive, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

/* Place rxjs imports */
import {Subscription} from "rxjs";

/* Place angular material imports here */
import {MatDialog} from "@angular/material/dialog";

@Directive()
export abstract class AbstractDriversConstructorsDirective<C> implements OnInit, OnDestroy {
  public loading: boolean = false;
  public abstract selectedYear: string;
  public abstract data: Array<C>;
  protected abstract dataSub$: Subscription;

  constructor(
    public dialog: MatDialog,
    protected route: ActivatedRoute,
    protected cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.getDataByYear();
  }

  public ngOnDestroy(): void {
    if(this.dataSub$) this.dataSub$.unsubscribe();
  }

  public abstract openDetails(id: string): void;
  public abstract imageExists(details: any): boolean;
  protected abstract getDataByYear(): void;
}
