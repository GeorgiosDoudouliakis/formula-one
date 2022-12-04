/* Place angular imports */
import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-page-header[title]',
  standalone: true,
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  imports: [CommonModule]
})
export class PageHeaderComponent {
  @Input() public title!: string;
}
