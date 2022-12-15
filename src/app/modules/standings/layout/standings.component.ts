/* Place angular imports */
import {Component} from '@angular/core';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent {
  public option: 'Driver' | 'Constructor' = 'Driver';
}
