import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { YearHandlerService } from '@shared/services';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-season-filter',
  templateUrl: './season-filter.component.html',
  styleUrls: ['./season-filter.component.scss']
})
export class SeasonFilterComponent implements OnInit, OnDestroy {
  public isFilterVisible$: Observable<boolean>;
  public yearControl: FormControl;
  private readonly _currentYear: number = new Date().getFullYear();
  private _yearControlChangesSub$: Subscription;

  constructor(
    private fb: FormBuilder,
    private yearHandlerService: YearHandlerService
  ) { }

  public ngOnInit(): void {
    this.yearControl = this.fb.control(this._currentYear.toString());

    this._yearControlChangesSub$ = this.yearControl.valueChanges.subscribe(year => this.yearHandlerService.yearHandler(year));
  }

  public ngOnDestroy(): void {
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
