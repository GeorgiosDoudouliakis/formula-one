import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isInMobile: boolean = false;

  constructor(public location: Location, public router: Router) { }

  ngOnInit(): void {
    this.isInMobile = window.matchMedia('(max-width: 768px)').matches;
  }
}
