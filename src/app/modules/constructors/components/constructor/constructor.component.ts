import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Constructor } from '@shared/models/constructor-driver.model';
import { Race } from '@shared/models/round-standings.model';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';
import { forkJoin, Subscription, switchMap } from 'rxjs';
import { ConstructorsService } from '../../services/constructors.service';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  details: any;
  results: Race[] = [];
  private detailsSub$: Subscription;

  constructor(
    private constructorsService: ConstructorsService,
    private route: ActivatedRoute,
    private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService
  ) { }

  ngOnInit(): void {
    this.getConstructorDetails();
    this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(false);
  }

  ngOnDestroy() {
    this.detailsSub$?.unsubscribe();
  }

  private getConstructorDetails() {
    this.isLoading = true;

    this.detailsSub$ = this.route.params.pipe(
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
