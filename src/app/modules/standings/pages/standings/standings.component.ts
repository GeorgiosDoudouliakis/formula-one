import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeasonFilterVisibilityHandlerService } from '@shared/services';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  public option: 'Driver' | 'Constructor' = 'Driver';

  constructor(
    private title: Title,
    private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService
  ) {
    this.title.setTitle('Formula 1');
  }

  public ngOnInit(): void {
    this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(true);
  }
}
