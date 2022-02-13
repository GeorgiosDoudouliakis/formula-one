import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constructor } from '@shared/models/constructor-driver.model';
import { YearHandlerService } from '@shared/services/year-handler.service';
import { Observable, switchMap } from 'rxjs';
import { ConstructorsService } from '../../services/constructors.service';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss']
})
export class ConstructorsComponent implements OnInit {
  constructors$: Observable<Constructor[]>;

  constructor(
    private yearHandlerService: YearHandlerService,
    private constructorsService: ConstructorsService, 
    public router: Router
  ) { }

  ngOnInit(): void {
    this.constructors$ = this.yearHandlerService.year$.pipe(
      switchMap((year: string) => this.constructorsService.getConstructors(year))
    );
  }
}
