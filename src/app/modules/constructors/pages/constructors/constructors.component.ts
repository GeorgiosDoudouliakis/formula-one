import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constructor } from '@shared/models/constructor-driver.model';
import { Observable } from 'rxjs';
import { ConstructorsService } from '../../services/constructors.service';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss']
})
export class ConstructorsComponent implements OnInit {
  constructors$: Observable<Constructor[]>;

  constructor(private constructorsService: ConstructorsService, public router: Router) { }

  ngOnInit(): void {
    this.constructors$ = this.constructorsService.getConstructors();
  }
}
