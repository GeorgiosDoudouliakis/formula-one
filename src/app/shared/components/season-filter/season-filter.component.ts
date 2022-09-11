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
  private readonly currentYear: number = new Date().getFullYear();
  private yearControlChangesSub$: Subscription;

  constructor(
    private fb: FormBuilder,
    private yearHandlerService: YearHandlerService,
    private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService
  ) { }

  ngOnInit(): void {
    this.yearControl = this.fb.control(this.currentYear.toString());

    this.yearControlChangesSub$ = this.yearControl.valueChanges.subscribe(year => this.yearHandlerService.yearHandler(year));

    this.isFilterVisible$ = this.seasonFilterVisibilityHandlerService.seasonFilterVisibility$;
  }

  ngOnDestroy() {
    this.yearControlChangesSub$?.unsubscribe();
  }

  get years() {
    let yearsArr:string[] = [];

    for(let year = 1950; year <= this.currentYear; year++) {
      yearsArr.push(year.toString());
    }

    return yearsArr.reverse();
  }
}
