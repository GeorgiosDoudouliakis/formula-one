import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Circuit {
  circuit: string;
  lat: string;
  long: string;
}

@Component({
  selector: 'app-circuit-location',
  templateUrl: './circuit-location.component.html',
  styleUrls: ['./circuit-location.component.scss']
})
export class CircuitLocationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Circuit) { }

  public ngOnInit(): void {
  }

}
