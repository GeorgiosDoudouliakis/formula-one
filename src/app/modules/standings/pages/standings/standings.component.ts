/* Place angular imports */
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent {
  public option: 'Driver' | 'Constructor' = 'Driver';

  constructor(private title: Title) {
    this.title.setTitle('Formula 1 | Standings');
  }
}
