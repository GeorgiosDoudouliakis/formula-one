/* Place angular imports here */
import {Component, Inject, OnInit} from '@angular/core';

/* Place RxJs imports here */
import {map, takeUntil} from "rxjs/operators";
import {catchError, tap, throwError} from "rxjs";

/* Place angular material imports here */
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

/* Place service imports here */
import {ConstructorsService} from "../../services/constructors.service";

/* Place interface imports here */
import {Constructor} from "@shared/interfaces/constructor-driver.interface";

/* Place any other imports here */
import {UnsubscribeUtility} from "@core/unsubscribe-utility.directive";

@Component({
  selector: 'app-constructor-details',
  templateUrl: './constructor-details.component.html',
  styleUrls: ['./constructor-details.component.scss']
})
export class ConstructorDetailsComponent extends UnsubscribeUtility implements OnInit {
  public f1Constructor: Constructor = {} as Constructor;
  public loading: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private _constructorsService: ConstructorsService
  ) {
    super();
  }

  public ngOnInit(): void {
    this._constructorsService.getConstructorDetails(this.data.id).pipe(
      map((f1Constructor: Constructor) => this.f1Constructor = f1Constructor),
      tap(() => this.loading = false),
      catchError((err) => {
        this.loading = false;
        return throwError(err);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
