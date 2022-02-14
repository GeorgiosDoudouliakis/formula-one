import { Component, OnInit } from '@angular/core';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  option: 'Driver' | 'Constructor' = 'Driver';

  constructor(private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService) { }

  ngOnInit(): void {
    this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(true);
  }
}