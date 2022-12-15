/* Place angular imports */
import {ChangeDetectorRef, Directive, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

/* Place angular material imports here */
import {MatDialog} from "@angular/material/dialog";

/* Place any other imports here */
import {UnsubscribeUtility} from "@core/unsubscribe-utility.directive";

@Directive()
export abstract class AbstractDriversConstructorsDirective<C> extends UnsubscribeUtility implements OnInit {
  public loading: boolean = false;
  public abstract selectedYear: string;
  public abstract data: Array<C>;

  constructor(
    public dialog: MatDialog,
    protected route: ActivatedRoute,
    protected cdr: ChangeDetectorRef
  ) {
    super();
  }

  public ngOnInit(): void {
    this.getDataByYear();
  }

  public abstract openDetails(id: string): void;
  public abstract imageExists(details: any): boolean;
  protected abstract getDataByYear(): void;
}
