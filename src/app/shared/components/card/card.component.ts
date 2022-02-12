import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CircuitLocationComponent } from 'src/app/modules/circuits/components/circuit-location/circuit-location.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() type: 'driver' | 'constructor' | 'circuit';
  @Input() data: any;

  constructor(public router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {}

  showLocation(lat: string, long: string) {
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