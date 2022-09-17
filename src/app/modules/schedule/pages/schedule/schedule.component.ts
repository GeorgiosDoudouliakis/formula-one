import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Race } from '@shared/models/round-standings.model';
import { Subscription } from 'rxjs';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public currentYear: string = new Date().getFullYear().toString();
  public schedule: Race[] = [];
  private _scheduleSub$: Subscription;

  constructor(
    private title: Title,
    private scheduleService: ScheduleService
  ) {
    this.title.setTitle('Formula 1 | Schedule');
  }

  public ngOnInit(): void {
    this.getSchedule();
  }

  public ngOnDestroy(): void {
    if(this._scheduleSub$) this._scheduleSub$.unsubscribe();
  }

  private getSchedule(): void {
    this.isLoading = true;

    this._scheduleSub$ = this.scheduleService.getSchedule()
      .subscribe({
        next: (schedule: Race[]) => {
          this.isLoading = false;
          this.schedule = schedule;
        },
        error: (err) => this.isLoading = false,
        complete: () => this.isLoading = false
      });
  }
}
