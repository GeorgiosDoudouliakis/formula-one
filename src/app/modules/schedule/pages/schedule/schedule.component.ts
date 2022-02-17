import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Race } from '@shared/models/round-standings.model';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';
import { YearHandlerService } from '@shared/services/year-handler.service';
import { Observable, switchMap } from 'rxjs';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule$: Observable<Race[]>;

  constructor(
    private title: Title,
    private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService,
    private scheduleService: ScheduleService,
    private yearHandlerService: YearHandlerService
  ) { 
    this.title.setTitle('Formula 1 | Schedule');
  }

  ngOnInit(): void {
    this.schedule$ = this.yearHandlerService.year$.pipe(
      switchMap((year: string) => this.scheduleService.getSchedule(year))
    );

    this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(true);
  }

}
