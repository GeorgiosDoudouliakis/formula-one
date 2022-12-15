/* Place angular imports here */
import {Component, Inject, OnDestroy, OnInit} from '@angular/core';

/* Place RxJs imports here */
import {map} from "rxjs/operators";
import {catchError, Subscription, tap, throwError} from "rxjs";

/* Place angular material imports here */
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

/* Place service imports here */
import {ConstructorsService} from "../../services/constructors.service";

/* Place interface imports here */
import {Constructor} from "@shared/interfaces/constructor-driver.interface";

@Component({
  selector: 'app-constructor-details',
  templateUrl: './constructor-details.component.html',
  styleUrls: ['./constructor-details.component.scss']
})
export class ConstructorDetailsComponent implements OnInit, OnDestroy {
  public f1Constructor: Constructor = {} as Constructor;
  public loading: boolean = true;
  private _constructorSub$: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private _constructorsService: ConstructorsService
  ) { }

  public ngOnInit(): void {
    this._constructorSub$ = this._constructorsService.getConstructorDetails(this.data.id).pipe(
      map((f1Constructor: Constructor) => this.f1Constructor = f1Constructor),
      tap(() => this.loading = false),
      catchError((err) => {
        this.loading = false;
        return throwError(err);
      })
    ).subscribe();
  }

  public ngOnDestroy(): void {
    if(this._constructorSub$) this._constructorSub$.unsubscribe();
  }
}
