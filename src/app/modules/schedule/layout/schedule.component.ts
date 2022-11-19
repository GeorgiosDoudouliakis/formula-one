/* Place angular imports */
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

/* Place interface imports */
import {Race} from '@shared/interfaces/round-standings.interface';

/* Place rxjs imports */
import {catchError, Subscription, tap, throwError} from 'rxjs';
import {map} from "rxjs/operators";

/* Place service imports */
import {ScheduleService} from '../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public currentYear: string = new Date().getFullYear().toString();
  public schedule: Race[] = [];
  private _scheduleSub$: Subscription;

  constructor(
    private _scheduleService: ScheduleService,
    private _cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.getSchedule();
  }

  public ngOnDestroy(): void {
    if(this._scheduleSub$) this._scheduleSub$.unsubscribe();
  }

  private getSchedule(): void {
    this.isLoading = true;

    this._scheduleSub$ = this._scheduleService.getSchedule().pipe(
      map((schedule: Race[]) => this.schedule = schedule),
      tap(() => this.isLoading = false),
      tap(() => this._cdr.markForCheck()),
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    ).subscribe();
  }
}
