import { Component, OnInit } from '@angular/core';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor(private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService) { }

  ngOnInit(): void {
    this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(true);
  }

}
