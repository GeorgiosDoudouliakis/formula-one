import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Constructor} from '@shared/models/constructor-driver.model';
import {ConstructorsService} from '@shared/services';
import {AbstractDriversConstructorsDirective} from "@shared/abstraction";
import {YearHandlerService} from "@shared/services";

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstructorsComponent extends AbstractDriversConstructorsDirective<Constructor> {
  constructor(
    private title: Title,
    protected override _yearHandlerService: YearHandlerService,
    protected override _dataService: ConstructorsService,
    protected override _cdr: ChangeDetectorRef
  ) {
    super(_yearHandlerService, _dataService, _cdr);
    this.title.setTitle('Formula 1 | Constructors');
  }
}
