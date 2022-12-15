/* Place angular imports */
import {Component, OnInit} from '@angular/core';

/* Place interface imports */
import {Race} from '@shared/interfaces/round-standings.interface';

/* Place rxjs imports */
import {catchError, tap, throwError} from 'rxjs';
import {map, takeUntil} from "rxjs/operators";

/* Place service imports */
import {ScheduleService} from '../services/schedule.service';

/* Place any other imports here */
import {UnsubscribeUtility} from "@core/unsubscribe-utility.directive";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent extends UnsubscribeUtility implements OnInit {
  public isLoading: boolean = true;
  public currentYear: string = new Date().getFullYear().toString();
  public schedule: Race[] = [];

  constructor(private _scheduleService: ScheduleService) {
    super();
  }

  public ngOnInit(): void {
    this._getSchedule();
  }

  private _getSchedule(): void {
    this._scheduleService.getSchedule().pipe(
      map((schedule: Race[]) => this.schedule = schedule),
      tap(() => this.isLoading = false),
      catchError((err) => {
        this.isLoading = false;
        return throwError(err);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
