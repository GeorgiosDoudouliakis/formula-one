import { Component, OnInit } from '@angular/core';
import { SeasonFilterVisibilityHandlerService } from "@shared/services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _seasonFilterVisibility: SeasonFilterVisibilityHandlerService) { }

  public ngOnInit(): void {
    this._seasonFilterVisibility.seasonFilterVisibilityHandler(false);
  }
}
