import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor(
    private title: Title,
    private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService
  ) { 
    this.title.setTitle('Formula 1 | Schedule');
  }

  ngOnInit(): void {
    this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(true);
  }

}
