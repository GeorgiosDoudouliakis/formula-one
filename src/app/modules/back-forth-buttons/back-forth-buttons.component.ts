/* Place angular imports */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-back-forth-buttons',
  templateUrl: './back-forth-buttons.component.html',
  styleUrls: ['./back-forth-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackForthButtonsComponent {
  constructor(public location: Location) { }
}
