/* Place angular imports */
import {Component, OnDestroy, OnInit} from '@angular/core';

/* Place rxjs imports */
import {catchError, Subscription, tap, throwError} from 'rxjs';
import {map} from "rxjs/operators";

/* Place interface imports */
import {Circuit} from '../interfaces/circuits.interface';

/* Place service imports */
import {CircuitsService} from '../services/circuits.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public currentYear: string = new Date().getFullYear().toString();
  public circuits: Circuit[] = [];
  private _circuitsSub$: Subscription;

  constructor(private _circuitsService: CircuitsService) { }

  public ngOnInit(): void {
    this._getCircuits();
  }

  public ngOnDestroy(): void {
    if(this._circuitsSub$) this._circuitsSub$.unsubscribe();
  }

  private _getCircuits() {
    this.isLoading = true;

    this._circuitsSub$ = this._circuitsService.getCircuits().pipe(
      map((circuits: Circuit[]) => this.circuits = circuits),
      tap(() => this.isLoading = false),
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    ).subscribe();
  }
}
