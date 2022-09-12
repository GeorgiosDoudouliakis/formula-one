import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers-constructors',
  templateUrl: './drivers-constructors.component.html',
  styleUrls: ['./drivers-constructors.component.scss']
})
export class DriversConstructorsComponent {
  @Input() public type: 'drivers' | 'constructors';
  @Input() public data: any;

  constructor(public router: Router) { }

  public navigateTo(data: any): void {
    if(this.type === 'drivers') {
      this.router.navigate(['/drivers', data.driverId]);
    } else if(this.type === 'constructors') {
      this.router.navigate(['/constructors', data.constructorId]);
    }
  }

  public imageExists(details: any): boolean {
    if(this.type === 'drivers') {
      return details?.driverId === 'alonso' ||
             details?.driverId === 'bottas' ||
             details?.driverId === 'gasly'  ||
             details?.driverId === 'giovinazzi' ||
             details?.driverId === 'hamilton' ||
             details?.driverId === 'kubica' ||
             details?.driverId === 'latifi' ||
             details?.driverId === 'leclerc' ||
             details?.driverId === 'mazepin' ||
             details?.driverId === 'norris' ||
             details?.driverId === 'ocon' ||
             details?.driverId === 'perez' ||
             details?.driverId === 'raikkonen' ||
             details?.driverId === 'ricciardo' ||
             details?.driverId === 'russell' ||
             details?.driverId === 'sainz' ||
             details?.driverId === 'mick_schumacher' ||
             details?.driverId === 'stroll' ||
             details?.driverId === 'tsunoda' ||
             details?.driverId === 'max_verstappen' ||
             details?.driverId === 'vettel';
    }
    return  details?.constructorId === 'alphatauri' ||
            details?.constructorId === 'alfa' ||
            details?.constructorId === 'alpine' ||
            details?.constructorId === 'aston_martin' ||
            details?.constructorId === 'ferrari' ||
            details?.constructorId === 'haas' ||
            details?.constructorId === 'mclaren' ||
            details?.constructorId === 'mercedes' ||
            details?.constructorId === 'red_bull' ||
            details?.constructorId === 'williams';
  }
}
