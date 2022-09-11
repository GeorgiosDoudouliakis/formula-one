import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
