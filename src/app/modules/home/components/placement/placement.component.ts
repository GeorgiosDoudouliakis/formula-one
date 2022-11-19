/* Place angular imports */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.scss']
})
export class PlacementComponent implements OnInit {
  @Input() public position!: string;
  @Input() public points!: string;
  @Input() public name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
