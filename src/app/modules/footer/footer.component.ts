/* Place angular imports */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class FooterComponent {
  constructor(private _window: Window) {}

  public goTop(): void {
    this._window.scrollTo(0, 0);
  }
}
