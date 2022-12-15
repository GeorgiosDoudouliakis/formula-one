/* Place angular imports */
import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Params, Router} from "@angular/router";

/* Place rxjs imports */
import {takeUntil} from "rxjs/operators";

/* Place angular material imports here */
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";

/* Place any other imports here */
import {UnsubscribeUtility} from "@core/unsubscribe-utility.directive";

@Component({
  selector: 'app-season-filter',
  standalone: true,
  templateUrl: './season-filter.component.html',
  styleUrls: ['./season-filter.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class SeasonFilterComponent extends UnsubscribeUtility implements OnInit {
  public yearControl: FormControl;
  private readonly _currentYear: number = new Date().getFullYear();

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    super();
  }

  public ngOnInit(): void {
    this.yearControl = this._fb.nonNullable.control<string>(this._currentYear.toString());

    this._route.queryParams.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params: Params) => this.yearControl.setValue(params['year']));

    this.yearControl.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(year => this._router.navigate(['./'], {
      queryParams: { year },
      relativeTo: this._route
    }));
  }

  public get years(): string[] {
    let yearsArr:string[] = [];

    for(let year = 1950; year <= this._currentYear; year++) {
      yearsArr.push(year.toString());
    }

    return yearsArr.reverse();
  }
}
