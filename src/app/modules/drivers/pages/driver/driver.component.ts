import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Driver } from '@shared/models/constructor-driver.model';
import { Race } from '@shared/models/round-standings.model';
import { forkJoin, Subscription, switchMap } from 'rxjs';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public details: any;
  public results: Race[] = [];
  private _detailsSub$: Subscription;

  constructor(
    private driverService: DriverService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.getDriverDetails();
  }

  public ngOnDestroy(): void {
    if(this._detailsSub$) this._detailsSub$.unsubscribe();
  }

  private getDriverDetails(): void {
    this.isLoading = true;

    this._detailsSub$ = this.route.params.pipe(
      switchMap((params: Params) => forkJoin([
        this.driverService.getDriverDetails(params['id']),
        this.driverService.getDriverResults(params['id'])
      ]))
      ).subscribe({
        next: (res: [Driver[], Race[]]) => {
          this.isLoading = false;
          this.details = res[0][0];
          this.results = res[1];
        },
        error: (err) => this.isLoading = false,
        complete: () => this.isLoading = false
      });
  }
}
