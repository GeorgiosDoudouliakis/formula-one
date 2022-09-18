import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Driver} from '@shared/models/constructor-driver.model';
import {YearHandlerService} from '@shared/services';
import {AbstractDriversConstructorsDirective} from "@shared/abstraction";
import {DriversService} from "@shared/services/drivers/drivers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriversComponent extends AbstractDriversConstructorsDirective<Driver> {
  constructor(
    private title: Title,
    public override router: Router,
    protected override _yearHandlerService: YearHandlerService,
    protected override _dataService: DriversService,
    protected override _cdr: ChangeDetectorRef
  ) {
    super(router, _yearHandlerService, _dataService, _cdr);
    this.title.setTitle('Formula 1 | Drivers');
  }

  public imageExists(details: any): boolean {
    return details?.driverId === 'alonso' ||
      details?.driverId === 'bottas' ||
      details?.driverId === 'gasly'  ||
      details?.driverId === 'giovinazzi' ||
      details?.driverId === 'hamilton' ||
      details?.driverId === 'kubica' ||
      details?.driverId === 'latifi' ||
      details?.driverId === 'leclerc' ||
      details?.driverId === 'mazepin' ||
      details?.driverId === 'norris' ||
      details?.driverId === 'ocon' ||
      details?.driverId === 'perez' ||
      details?.driverId === 'raikkonen' ||
      details?.driverId === 'ricciardo' ||
      details?.driverId === 'russell' ||
      details?.driverId === 'sainz' ||
      details?.driverId === 'mick_schumacher' ||
      details?.driverId === 'stroll' ||
      details?.driverId === 'tsunoda' ||
      details?.driverId === 'max_verstappen' ||
      details?.driverId === 'vettel';
  }
}
