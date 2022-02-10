import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  option: 'Driver' | 'Constructor' = 'Driver';

  constructor() { }

  ngOnInit(): void {}

  onOptionChange(event: MatSlideToggleChange) {
    this.option = event.checked ? 'Constructor' : 'Driver';
  }
}
