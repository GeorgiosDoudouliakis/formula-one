import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Race } from '@shared/models/round-standings.model';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';
import { YearHandlerService } from '@shared/services/year-handler.service';
import { Subscription, switchMap } from 'rxjs';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  schedule: Race[] = [];
  private scheduleSub$: Subscription;

  constructor(
    private title: Title,
    private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService,
    private scheduleService: ScheduleService,
    private yearHandlerService: YearHandlerService
  ) { 
    this.title.setTitle('Formula 1 | Schedule');
  }

  ngOnInit(): void {
    this.getSchedule();
    this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(true);
  }

  ngOnDestroy() {
    this.scheduleSub$?.unsubscribe();
  }

  private getSchedule() {
    this.isLoading = true;

    this.scheduleSub$ = this.yearHandlerService.year$.pipe(
      switchMap((year: string) => this.scheduleService.getSchedule(year))
    ).subscribe({
      next: (schedule: Race[]) => {
        this.isLoading = false;
        this.schedule = schedule;
      },
      error: (err) => this.isLoading = false,
      complete: () => this.isLoading = false
    });
  }
}
