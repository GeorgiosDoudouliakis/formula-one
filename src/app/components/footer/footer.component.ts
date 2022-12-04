/* Place angular imports */
import {Component, Inject} from '@angular/core';

/* Place angular material imports here */
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    MatButtonModule,
    MatIconModule
  ],
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
