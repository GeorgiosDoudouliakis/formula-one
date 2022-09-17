import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Constructor } from '@shared/models/constructor-driver.model';
import { YearHandlerService, SeasonFilterVisibilityHandlerService } from '@shared/services';
import { Subscription, switchMap, map } from 'rxjs';
import { ConstructorsService } from '../../services/constructors.service';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss']
})
export class ConstructorsComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public constructors: Constructor[] = [];
  private _constructorsSub$: Subscription;

  constructor(
    private title: Title,
    private yearHandlerService: YearHandlerService,
    private constructorsService: ConstructorsService,
    public router: Router,
    private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService
  ) {
    this.title.setTitle('Formula 1 | Constructors');
  }

  public ngOnInit(): void {
    this.getConstructors();
    this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(true);
  }

  public ngOnDestroy(): void {
    if(this._constructorsSub$) this._constructorsSub$.unsubscribe();
  }

  public getConstructors(): void {
    this._constructorsSub$ = this.yearHandlerService.year$.pipe(
      map((year: string) => {
        this.isLoading = true;
        return year;
      }),
      switchMap((year: string) => this.constructorsService.getConstructors(year))
    ).subscribe({
      next: (constructors: Constructor[]) => {
        this.isLoading = false;
        this.constructors = constructors;
      },
      error: (err) => this.isLoading = false,
      complete: () => this.isLoading = false
    });
  }
}
