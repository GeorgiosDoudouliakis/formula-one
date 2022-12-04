/* Place angular imports */
import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

/* Place component imports here */
import { NavigationComponent } from "../navigation/navigation.component";

/* Place angular material imports here */
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    RouterModule,
    NavigationComponent,
    MatToolbarModule
  ]
})
export class HeaderComponent {
  public isMobileMenuOpen: boolean = false;
}
