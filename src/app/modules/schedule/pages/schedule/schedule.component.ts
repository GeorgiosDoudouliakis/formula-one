import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Race} from '@shared/models/round-standings.model';
import {catchError, Subscription, tap, throwError} from 'rxjs';
import {map} from "rxjs/operators";
import {ScheduleService} from '../../services/schedule.service';

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
    private _title: Title,
    private _scheduleService: ScheduleService,
    private _cdr: ChangeDetectorRef
  ) {
    this._title.setTitle('Formula 1 | Schedule');
  }

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
