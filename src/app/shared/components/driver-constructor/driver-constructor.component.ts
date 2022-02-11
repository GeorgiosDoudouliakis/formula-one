import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Constructor, Driver } from '@shared/models/constructor-driver.model';
import { Race } from '@shared/models/round-standings.model';
import { Subscription, switchMap } from 'rxjs';
import { DriversService } from 'src/app/modules/drivers/services/drivers.service';
import { ConstructorsService } from '../../../modules/constructors/services/constructors.service';

@Component({
  selector: 'app-driver-constructor',
  templateUrl: './driver-constructor.component.html',
  styleUrls: ['./driver-constructor.component.scss']
})
export class DriverConstructorComponent implements OnInit {
  @Input() type: 'driver' | 'constructor';
  details: any;
  results: Race[] = [];
  private detailsSub$: Subscription;
  private resultsSub$: Subscription;

  constructor(
    private driversService: DriversService,
    private constructorsService: ConstructorsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDetails();
  }

  ngOnDestroy() {
    this.detailsSub$?.unsubscribe();
    this.resultsSub$?.unsubscribe();
  }

  private getDetails() {
    if(this.type === 'driver') {
      this.detailsSub$ = this.route.params.pipe(
        switchMap((params: Params) => this.driversService.getDriverDetails(params['id']))
      ).subscribe((driver: Driver[]) => this.details = driver[0]);
        
      this.resultsSub$ = this.route.params.pipe(
        switchMap((params: Params) => this.driversService.getDriverResults(params['id']))
      ).subscribe((results: Race[]) => this.results = results);
    } else if(this.type === 'constructor') {
      this.detailsSub$ = this.route.params.pipe(
        switchMap((params: Params) => this.constructorsService.getConstructorDetails(params['id']))
      ).subscribe((constructors: Constructor[]) => this.details = constructors[0]);
  
      this.resultsSub$ = this.route.params.pipe(
        switchMap((params: Params) => this.constructorsService.getConstructorResults(params['id']))
      ).subscribe((results: Race[]) => this.results = results);
    }
  }
}
