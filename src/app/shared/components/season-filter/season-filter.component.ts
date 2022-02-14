import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';
import { YearHandlerService } from '@shared/services/year-handler.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-season-filter',
  templateUrl: './season-filter.component.html',
  styleUrls: ['./season-filter.component.scss']
})
export class SeasonFilterComponent implements OnInit, OnDestroy {
  isFilterVisible$: Observable<boolean>;
  yearControl: FormControl;
  private yearControlChangesSub$: Subscription;

  constructor(
    private fb: FormBuilder,
    private yearHandlerService: YearHandlerService,
    private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService
  ) { }

  ngOnInit(): void {
    this.yearControl = this.fb.control('2021');

    this.yearControlChangesSub$ = this.yearControl.valueChanges.subscribe(year => this.yearHandlerService.yearHandler(year));

    this.isFilterVisible$ = this.seasonFilterVisibilityHandlerService.seasonFilterVisibility$;
  }

  ngOnDestroy() {
    this.yearControlChangesSub$?.unsubscribe();
  }

  get years() {
    let yearsArr:string[] = [];

    for(let year = 1950; year <= 2021; year++) {
      yearsArr.push(year.toString());
    }

    return yearsArr;
  }
}
