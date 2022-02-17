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

  get imageExists() {
    if(this.type === 'driver') {
      return this.details?.driverId === 'alonso' ||
             this.details?.driverId === 'bottas' ||
             this.details?.driverId === 'gasly'  ||
             this.details?.driverId === 'giovinazzi' ||
             this.details?.driverId === 'hamilton' ||
             this.details?.driverId === 'kubica' ||
             this.details?.driverId === 'latifi' ||
             this.details?.driverId === 'leclerc' ||
             this.details?.driverId === 'mazepin' ||
             this.details?.driverId === 'norris' ||
             this.details?.driverId === 'ocon' ||
             this.details?.driverId === 'perez' ||
             this.details?.driverId === 'raikkonen' ||
             this.details?.driverId === 'ricciardo' ||
             this.details?.driverId === 'russell' ||
             this.details?.driverId === 'sainz' ||
             this.details?.driverId === 'mick_schumacher' ||
             this.details?.driverId === 'stroll' ||
             this.details?.driverId === 'tsunoda' ||
             this.details?.driverId === 'max_verstappen' ||
             this.details?.driverId === 'vettel';
    } 
    return  this.details?.constructorId === 'alphatauri' ||
            this.details?.constructorId === 'alfa' ||
            this.details?.constructorId === 'alpine' ||
            this.details?.constructorId === 'aston_martin' ||
            this.details?.constructorId === 'ferrari' ||
            this.details?.constructorId === 'haas' ||
            this.details?.constructorId === 'mclaren' ||
            this.details?.constructorId === 'mercedes' ||
            this.details?.constructorId === 'red_bull' ||
            this.details?.constructorId === 'williams'; 
  }
}