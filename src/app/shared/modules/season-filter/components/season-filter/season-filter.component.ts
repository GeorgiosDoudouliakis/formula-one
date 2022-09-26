/* Place angular imports */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from "@angular/router";

/* Place rxjs imports */
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-season-filter',
  templateUrl: './season-filter.component.html',
  styleUrls: ['./season-filter.component.scss']
})
export class SeasonFilterComponent implements OnInit, OnDestroy {
  public yearControl: FormControl;
  private readonly _currentYear: number = new Date().getFullYear();
  private _yearControlChangesSub$: Subscription;
  private _queryParamsSub$: Subscription;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.yearControl = this._fb.nonNullable.control<string>(this._currentYear.toString());

    this._queryParamsSub$ = this._route.queryParams.subscribe((params: Params) => this.yearControl.setValue(params['year']));

    this._yearControlChangesSub$ = this.yearControl.valueChanges.subscribe(year => this._router.navigate(['./'], {
      queryParams: { year },
      relativeTo: this._route
    }));
  }

  public ngOnDestroy(): void {
    if(this._queryParamsSub$) this._queryParamsSub$.unsubscribe();
    if(this._yearControlChangesSub$) this._yearControlChangesSub$.unsubscribe();
  }

  public get years(): string[] {
    let yearsArr:string[] = [];

    for(let year = 1950; year <= this._currentYear; year++) {
      yearsArr.push(year.toString());
    }

    return yearsArr.reverse();
  }
}
