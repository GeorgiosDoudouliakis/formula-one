import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Race } from '@shared/models/round-standings.model';

@Component({
  selector: 'app-constructor-results',
  templateUrl: './constructor-results.component.html',
  styleUrls: ['./constructor-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstructorResultsComponent implements OnInit {
  @Input() race: Race;

  constructor(public router: Router) { }

  ngOnInit(): void {}
}