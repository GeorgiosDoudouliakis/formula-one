import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { YearHandlerService } from '@shared/services/year-handler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit, OnDestroy {
  @Output() public optionHandler = new EventEmitter();
  public option: 'Driver' | 'Constructor' = 'Driver';
  public checked: boolean = false;
  private _yearSub$: Subscription;

  constructor(private yearHandlerService: YearHandlerService) { }

  public ngOnInit(): void {
    this._yearSub$ = this.yearHandlerService.year$.subscribe((year: string) => {
      this.checked = false;
      this.option = 'Driver';
      this.optionHandler.emit(this.option);
    });
  }

  public ngOnDestroy(): void {
    if(this._yearSub$) this._yearSub$.unsubscribe();
  }

  public onOptionChange(event: MatSlideToggleChange): void {
    this.checked = event.checked;
    this.option = event.checked ? 'Constructor' : 'Driver';
    this.optionHandler.emit(this.option);
  }
}
