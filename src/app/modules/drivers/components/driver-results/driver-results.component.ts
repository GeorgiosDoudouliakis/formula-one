import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Race } from '@shared/models/round-standings.model';

@Component({
  selector: 'app-driver-results',
  templateUrl: './driver-results.component.html',
  styleUrls: ['./driver-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriverResultsComponent implements OnInit {
  @Input() race: Race;

  constructor() { }

  ngOnInit(): void {}
}