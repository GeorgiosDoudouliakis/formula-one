import { Component, Input, OnInit } from '@angular/core';
import { Race } from '../../models/round-standings.model';

@Component({
  selector: 'app-driver-constructor',
  templateUrl: './driver-constructor.component.html',
  styleUrls: ['./driver-constructor.component.scss']
})
export class DriverConstructorComponent implements OnInit {
  @Input() type: 'driver' | 'constructor';
  @Input() details: any;
  @Input() results: Race[];

  constructor() { }

  ngOnInit(): void {}
}
