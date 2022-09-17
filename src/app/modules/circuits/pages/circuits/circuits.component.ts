import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { YearHandlerService } from '@shared/services';
import { Subscription, switchMap, map } from 'rxjs';
import { Circuit } from '../../models/circuits.model';
import { CircuitsService } from '../../services/circuits.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public circuits: Circuit[] = [];
  private _circuitsSub$: Subscription;

  constructor(
    private title: Title,
    private yearHandlerService: YearHandlerService,
    private circuitsService: CircuitsService
  ) {
    this.title.setTitle('Formula 1 | Circuits');
  }

  public ngOnInit(): void {
    this.getCircuits();
  }

  public ngOnDestroy(): void {
    if(this._circuitsSub$) this._circuitsSub$.unsubscribe();
  }

  private getCircuits() {
    this.isLoading = true;

    this._circuitsSub$ = this.circuitsService.getCircuits()
      .subscribe({
        next: (circuits: Circuit[]) => {
          this.isLoading = false;
          this.circuits = circuits;
        },
        error: (err) => this.isLoading = false,
        complete: () => this.isLoading = false
    });
  }
}
