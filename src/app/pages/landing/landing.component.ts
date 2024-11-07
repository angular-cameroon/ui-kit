import { Component } from '@angular/core';
import { faIcon } from '../../utils/icon.utils';

@Component({
  selector: 'cam-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  standalone: true
})
export class LandingComponent {
  protected readonly faIcon = faIcon

}
