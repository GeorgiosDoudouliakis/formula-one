/* Place angular imports */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

/* Place component imports */
import { CircuitLocationComponent } from 'src/app/modules/circuits/components/circuit-location/circuit-location.component';

/* Place angular material imports */
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() public type: 'driver' | 'constructor' | 'circuit' | 'race';
  @Input() public data: any;

  constructor(public router: Router, private dialog: MatDialog) { }

  public get cardHeader(): string {
    if(this.type === 'circuit') {
      return this.data.circuitName;
    } else if(this.type === 'race') {
      return this.data.raceName;
    }
    return this.data.Circuit.circuitName;
  }

  public showLocation(lat: string, long: string): void {
    this.dialog.open(CircuitLocationComponent, {
      width: '90vw',
      data: {
        circuit: this.data.circuitName,
        lat,
        long
      }
    });
  }
}
