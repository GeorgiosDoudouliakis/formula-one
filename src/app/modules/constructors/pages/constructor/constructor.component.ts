/* Place angular imports */
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

/* Place model imports */
import {Constructor} from '@shared/models/constructor-driver.model';
import {Race} from '@shared/models/round-standings.model';

/* Place rxjs imports */
import {catchError, forkJoin, Subscription, switchMap, tap, throwError} from 'rxjs';
import {map} from "rxjs/operators";

/* Place service imports */
import {ConstructorService} from '../../services/constructor.service';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstructorComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public details: any;
  public results: Race[] = [];
  private _detailsSub$: Subscription;

  constructor(
    private _constructorsService: ConstructorService,
    private _route: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.getConstructorDetails();
  }

  public ngOnDestroy(): void {
    if(this._detailsSub$) this._detailsSub$.unsubscribe();
  }

  private getConstructorDetails(): void {
    this._detailsSub$ = this._route.params.pipe(
      tap(() => this.isLoading = true),
      switchMap((params: Params) => forkJoin([
        this._constructorsService.getConstructorDetails(params['id']),
        this._constructorsService.getConstructorResults(params['id'])
      ])),
      tap(() => this.isLoading = false),
      map((res: [Constructor[], Race[]]) => {
        this.details = res[0][0];
        this.results = res[1];
      }),
      tap(() => this._cdr.markForCheck()),
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    ).subscribe();
  }
}
