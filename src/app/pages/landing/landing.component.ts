import { Component } from '@angular/core';
import { faBrandIcon } from '../../utils/icon.utils';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent, NgDocThemeToggleComponent } from '@ng-doc/app';
import { NgDocIconComponent, NgDocTooltipDirective, NgDocButtonIconComponent } from '@ng-doc/ui-kit';

@Component({
  selector: 'cam-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  standalone: true,
  imports: [
    NgDocNavbarComponent,
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
    NgDocRootComponent,
    RouterOutlet,
    RouterLink,
    NgDocIconComponent,
    NgDocTooltipDirective,
    NgDocButtonIconComponent,
    NgDocThemeToggleComponent
  ]
})
export class LandingComponent {
  protected readonly faBrandIcon = faBrandIcon;
}
