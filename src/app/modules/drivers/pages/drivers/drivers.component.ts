import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Driver} from '@shared/models/constructor-driver.model';
import {YearHandlerService} from '@shared/services';
import {AbstractDriversConstructorsDirective} from "@shared/abstraction";
import {DriversService} from "@shared/services/drivers/drivers.service";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriversComponent extends AbstractDriversConstructorsDirective<Driver> {
  constructor(
    private title: Title,
    protected override _yearHandlerService: YearHandlerService,
    protected override _dataService: DriversService,
    protected override _cdr: ChangeDetectorRef
  ) {
    super(_yearHandlerService, _dataService, _cdr);
    this.title.setTitle('Formula 1 | Drivers');
  }
}
