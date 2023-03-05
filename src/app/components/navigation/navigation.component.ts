/* Place angular imports */
import {
  Component,
  EventEmitter, Inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule, DOCUMENT} from "@angular/common";

/* Place angular material imports here */
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class NavigationComponent implements OnChanges {
  public currentYear: string = new Date().getFullYear().toString();
  @Input() public isMobileMenuOpen: boolean = false;
  @Output() public isMobileMenuHandler = new EventEmitter<boolean>(false);

  constructor(@Inject(DOCUMENT) private _document: Document) {}

  public ngOnChanges(changes: SimpleChanges): void {
    this._document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto';
  }
}
