/* Place angular imports */
import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from "@angular/router";

/* Place model imports */
import {Constructor} from '@shared/models/constructor-driver.model';

/* Place service imports */
import {ConstructorsService} from '@shared/services';

/* Place any other imports here */
import {AbstractDriversConstructorsDirective} from "@shared/abstraction";

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstructorsComponent extends AbstractDriversConstructorsDirective<Constructor> {
  constructor(
    private title: Title,
    public override router: Router,
    protected override _dataService: ConstructorsService,
    protected override _route: ActivatedRoute,
    protected override _cdr: ChangeDetectorRef
  ) {
    super(router, _dataService, _route, _cdr);
    this.title.setTitle('Formula 1 | Constructors');
  }

  public imageExists(details: any): boolean {
    return  details?.constructorId === 'alphatauri' ||
      details?.constructorId === 'alfa' ||
      details?.constructorId === 'alpine' ||
      details?.constructorId === 'aston_martin' ||
      details?.constructorId === 'ferrari' ||
      details?.constructorId === 'haas' ||
      details?.constructorId === 'mclaren' ||
      details?.constructorId === 'mercedes' ||
      details?.constructorId === 'red_bull' ||
      details?.constructorId === 'williams';
  }
}
