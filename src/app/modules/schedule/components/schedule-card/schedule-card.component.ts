/* Place angular imports */
import {Component, Input} from '@angular/core';

/* Place interface imports */
import {Race} from "@shared/interfaces/round-standings.interface";

@Component({
  selector: 'app-schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss']
})
export class ScheduleCardComponent {
  @Input() race: Race;
}
