/* Place angular imports */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-page-header[title]',
  standalone: true,
  template: `
    <h1>
      F1 {{ title | uppercase }} {{ year }}
    </h1>
  `,
  styles: [`
    h1 {
      margin-bottom: 2rem;
    }
  `],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent {
  @Input() public title!: string;
  @Input() public year!: string;
}
