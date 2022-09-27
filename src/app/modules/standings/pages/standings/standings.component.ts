/* Place angular imports */
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandingsComponent {
  public option: 'Driver' | 'Constructor' = 'Driver';

  constructor() {}
}
