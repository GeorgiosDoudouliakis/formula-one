import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Circuit } from '../../models/circuits.model';
import { CircuitsService } from '../../services/circuits.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent implements OnInit {
  circuits$: Observable<Circuit[]>;

  constructor(private circuitsService: CircuitsService) { }

  ngOnInit(): void {
    this.circuits$ = this.circuitsService.getCircuits();
  }
}
