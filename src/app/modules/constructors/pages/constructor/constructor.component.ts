import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Constructor } from '@shared/models/constructor-driver.model';
import { Race } from '@shared/models/round-standings.model';
import { SeasonFilterVisibilityHandlerService } from '@shared/services';
import { forkJoin, Subscription, switchMap } from 'rxjs';
import { ConstructorsService } from '../../services/constructors.service';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public details: any;
  public results: Race[] = [];
  private _detailsSub$: Subscription;

  constructor(
    private constructorsService: ConstructorsService,
    private route: ActivatedRoute,
    private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService
  ) { }

  public ngOnInit(): void {
    this.getConstructorDetails();
    this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(false);
  }

  public ngOnDestroy(): void {
    if(this._detailsSub$) this._detailsSub$.unsubscribe();
  }

  private getConstructorDetails(): void {
    this.isLoading = true;

    this._detailsSub$ = this.route.params.pipe(
      switchMap((params: Params) => forkJoin([
        this.constructorsService.getConstructorDetails(params['id']),
        this.constructorsService.getConstructorResults(params['id'])
      ]))
    ).subscribe({
        next: (res: [Constructor[], Race[]]) => {
          this.isLoading = false;
          this.details = res[0][0];
          this.results = res[1];
        },
        error: (err) => this.isLoading = false,
        complete: () => this.isLoading = false
    })
  }
}