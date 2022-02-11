import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Race } from '@shared/models/round-standings.model';

@Component({
  selector: 'app-circuit-results',
  templateUrl: './circuit-results.component.html',
  styleUrls: ['./circuit-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircuitResultsComponent implements OnInit {
  @Input() type: 'driver' | 'constructor';
  @Input() race: Race;

  constructor(public router: Router) { }

  ngOnInit(): void {}
}