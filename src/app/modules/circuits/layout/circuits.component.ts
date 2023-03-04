/* Place angular imports */
import {Component, OnInit} from '@angular/core';

/* Place rxjs imports */
import {catchError, tap, throwError} from 'rxjs';
import {map, takeUntil} from "rxjs/operators";

/* Place interface imports */
import {Circuit} from '../interfaces/circuits.interface';

/* Place service imports */
import {CircuitsService} from '../services/circuits.service';

/* Place any other imports here */
import {UnsubscribeUtility} from "@core/unsubscribe-utility.directive";

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent extends UnsubscribeUtility implements OnInit {
  public isLoading: boolean = true;
  public currentYear: string = new Date().getFullYear().toString();
  public circuits: Circuit[] = [];

  constructor(private _circuitsService: CircuitsService) {
    super();
  }

  public ngOnInit(): void {
    this._getCircuits();
  }

  private _getCircuits() {
    this._circuitsService.getCircuits().pipe(
      map((circuits: Circuit[]) => this.circuits = circuits),
      tap(() => this.isLoading = false),
      catchError((err) => {
        this.isLoading = false;
        console.error(err);
        return throwError(err);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
