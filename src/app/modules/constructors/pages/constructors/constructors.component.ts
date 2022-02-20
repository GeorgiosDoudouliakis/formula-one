import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Constructor } from '@shared/models/constructor-driver.model';
import { SeasonFilterVisibilityHandlerService } from '@shared/services/season-filter-visibility-handler.service';
import { YearHandlerService } from '@shared/services/year-handler.service';
import { Subscription, switchMap } from 'rxjs';
import { ConstructorsService } from '../../services/constructors.service';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss']
})
export class ConstructorsComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  constructors: Constructor[] = [];
  private constructorsSub$: Subscription;

  constructor(
    private title: Title,
    private yearHandlerService: YearHandlerService,
    private constructorsService: ConstructorsService, 
    public router: Router,
    private seasonFilterVisibilityHandlerService: SeasonFilterVisibilityHandlerService
  ) { 
    this.title.setTitle('Formula 1 | Constructors');
  }

  ngOnInit(): void {
    this.getConstructors();
    this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(true);
  }

  ngOnDestroy() {
    this.constructorsSub$?.unsubscribe();
  }

  getConstructors() {
    this.isLoading = true;

    this.constructorsSub$ = this.yearHandlerService.year$.pipe(
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
