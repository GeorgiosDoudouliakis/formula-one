/* Place angular imports */
import {Component, Input} from '@angular/core';

/* Place component imports */
import {CircuitLocationComponent} from "../circuit-location/circuit-location.component";

/* Place interface imports */
import {Circuit} from "@shared/interfaces/round-standings.interface";

/* Place angular material imports */
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-circuit-card',
  templateUrl: './circuit-card.component.html',
  styleUrls: ['./circuit-card.component.scss']
})
export class CircuitCardComponent {
  @Input() public circuit: Circuit;

  constructor(private _dialog: MatDialog) {}

  public showLocation(lat: string, long: string): void {
    this._dialog.open(CircuitLocationComponent, {
      width: '90vw',
      data: {
        circuit: this.circuit.circuitName,
        lat,
        long
      }
    });
  }
}
