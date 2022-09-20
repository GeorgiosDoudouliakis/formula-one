import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter, Inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnChanges {
  @Input() public isMobileMenuOpen: boolean = false;
  @Output() public isMobileMenuHandler = new EventEmitter<boolean>(false);

  constructor(@Inject(DOCUMENT) private _document: Document) {}

  public ngOnChanges(changes: SimpleChanges): void {
    this._document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto';
  }
}
