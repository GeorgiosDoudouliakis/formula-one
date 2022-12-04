/* Place angular imports */
import {Component, OnDestroy, OnInit} from '@angular/core';

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
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  public isLoading: boolean = true;
  public currentYear: string = new Date().getFullYear().toString();
  public schedule: Race[] = [];
  private _scheduleSub$: Subscription;

  constructor(private _scheduleService: ScheduleService) { }

  public ngOnInit(): void {
    this._getSchedule();
  }

  public ngOnDestroy(): void {
    if(this._scheduleSub$) this._scheduleSub$.unsubscribe();
  }

  private _getSchedule(): void {
    this._scheduleSub$ = this._scheduleService.getSchedule().pipe(
      map((schedule: Race[]) => this.schedule = schedule),
      tap(() => this.isLoading = false),
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    ).subscribe();
  }
}
