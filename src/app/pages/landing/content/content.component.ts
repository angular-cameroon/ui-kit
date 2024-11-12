import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faBrandIcon, faIcon } from '../../../utils/icon.utils';

@Component({
  selector: 'cam-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class ContentComponent {
  protected readonly faBrandIcon = faBrandIcon;
  protected readonly faIcon = faIcon;
}
