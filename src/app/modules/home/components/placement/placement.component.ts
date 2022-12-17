/* Place angular imports */
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlacementComponent {
  @Input() public position!: string;
  @Input() public points!: string;
  @Input() public name!: string;
}
