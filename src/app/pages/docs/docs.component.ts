import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  NgDocNavbarComponent,
  NgDocRootComponent,
  NgDocSidebarComponent,
  NgDocThemeToggleComponent,
} from '@ng-doc/app';
import {
  NgDocButtonIconComponent,
  NgDocIconComponent,
  NgDocTooltipDirective,
} from '@ng-doc/ui-kit';
import { faBrandIcon } from '../../utils/icon.utils';
import { preventInitialChildAnimations } from '@ng-doc/ui-kit/animations';

@Component({
  selector: 'cam-docs-shell',
  styleUrl: `./docs.component.scss`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [preventInitialChildAnimations],
  standalone: true,
  templateUrl: `./docs.component.html`,
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
export class DocsComponent {
  protected readonly faBrandIcon = faBrandIcon;
}

