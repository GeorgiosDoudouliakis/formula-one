/* Place angular imports */
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

/* Place interface imports */
import {Race} from "@shared/interfaces/round-standings.interface";

@Component({
  selector: 'app-schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleCardComponent {
  @Input() public race: Race;
}
