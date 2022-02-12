import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Race } from '../../models/round-standings.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() type: 'driver' | 'constructor' | 'circuit';
  @Input() data: any;

  constructor(public router: Router) { }

  ngOnInit(): void {}
}