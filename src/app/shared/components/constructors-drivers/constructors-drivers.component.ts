import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-constructors-drivers',
  templateUrl: './constructors-drivers.component.html',
  styleUrls: ['./constructors-drivers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstructorsDriversComponent implements OnInit {
  @Input() type: 'drivers' | 'constructors';
  @Input() data$: Observable<any>;

  constructor(public router: Router) { }

  ngOnInit(): void {}

  navigateTo(data: any) {
    if(this.type === 'drivers') {
      this.router.navigate(['/drivers', data.driverId]);
    } else if(this.type === 'constructors') {
      this.router.navigate(['/constructors', data.constructorId]);
    }
  }
}