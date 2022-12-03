/* Place angular imports */
import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class FooterComponent {
  constructor(@Inject(Window) private _window: Window) {}

  public goTop(): void {
    this._window.scrollTo(0, 0);
  }
}
