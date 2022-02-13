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
  @Output() optionHandler = new EventEmitter();
  option: 'Driver' | 'Constructor' = 'Driver';
  checked: boolean = false;
  private yearSub$: Subscription;

  constructor(private yearHandlerService: YearHandlerService) { }

  ngOnInit(): void {
    this.yearSub$ = this.yearHandlerService.year$.subscribe((year: string) => {
      this.checked = false;
      this.option = 'Driver';
      this.optionHandler.emit(this.option);
    });
  }

  ngOnDestroy() {
    this.yearSub$?.unsubscribe();
  }

  onOptionChange(event: MatSlideToggleChange) {
    this.checked = event.checked;
    this.option = event.checked ? 'Constructor' : 'Driver';
    this.optionHandler.emit(this.option);
  }
}
