import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YearHandlerService } from '@shared/services/year-handler.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-constructors-drivers',
  templateUrl: './constructors-drivers.component.html',
  styleUrls: ['./constructors-drivers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstructorsDriversComponent implements OnInit, OnDestroy {
  @Input() type: 'drivers' | 'constructors';
  @Input() data$: Observable<any>;
  year: string;
  private yearSub$: Subscription;

  constructor(
    public router: Router,
    private yearHandlerService: YearHandlerService
  ) { }

  ngOnInit(): void {
    this.yearSub$ = this.yearHandlerService.year$.subscribe((year: string) => this.year = year);
  }

  ngOnDestroy() {
    this.yearSub$?.unsubscribe();
  }

  navigateTo(data: any) {
    if(this.type === 'drivers') {
      this.router.navigate(['/drivers', data.driverId]);
    } else if(this.type === 'constructors') {
      this.router.navigate(['/constructors', data.constructorId]);
    }
  }
}