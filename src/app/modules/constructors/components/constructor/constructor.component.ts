import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Constructor } from '@shared/models/constructor-driver.model';
import { Subscription, switchMap } from 'rxjs';
import { ConstructorsService } from '../../services/constructors.service';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent implements OnInit {
  details = {} as Constructor;
  private detailsSub$: Subscription;

  constructor(
    private constructorsService: ConstructorsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getConstructorData();
  }

  ngOnDestroy() {
    this.detailsSub$?.unsubscribe();
  }

  private getConstructorData() {
    this.detailsSub$ = this.route.params.pipe(
      switchMap((params: Params) => this.constructorsService.getConstructorDetails(params['id']))
    ).subscribe((constructors: Constructor[]) => this.details = constructors[0]);
  }
}
