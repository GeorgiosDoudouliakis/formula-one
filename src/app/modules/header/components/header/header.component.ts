import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public isInMobile: boolean = false;

  constructor() { }

  public ngOnInit(): void {
    this.isInMobile = window.matchMedia('(max-width: 768px)').matches;
  }
}
