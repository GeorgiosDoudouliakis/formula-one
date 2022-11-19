/* Place angular imports */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-driver-constructor-card',
  templateUrl: './driver-constructor-card.component.html',
  styleUrls: ['./driver-constructor-card.component.scss']
})
export class DriverConstructorCardComponent {
  @Input() public data: any;
}
