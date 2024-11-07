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

@Component({
  selector: 'cam-docs-shell',
  template: `
    <ng-doc-root>
      <ng-doc-navbar>
        <h3 style="margin: 0" routerLink="/" class="font-bold cursor-pointer text-xl md:text-2xl" ngDocNavbarLeft>
          CamerUI
        </h3>
        <div class="flex gap-3 ml-4 items-center" ngDocNavbarRight>
          <div class="flex items-center gap-4">
            <a href="https://github.com/angular-cameroon/ui-kit" target="_blank" rel="noopener noreferrer">
              <i class="{{ faBrandIcon('github') }} text-2xl text-slate-800 dark:text-doc-dark-text"></i>
            </a>
            <a href="https://x.com/ngcameroon" target="_blank" rel="noopener noreferrer">
              <i class="{{ faBrandIcon('x-twitter') }} text-2xl text-slate-800 dark:text-doc-dark-text"></i>
            </a>
          </div>
          <ng-doc-theme-toggle />
        </div>
      </ng-doc-navbar>
      <ng-doc-sidebar></ng-doc-sidebar>
      <router-outlet></router-outlet>

      <ng-template #footerContent>
        <div class="ng-doc-footer">CamerUI &copy; Angular Cameroon</div>
      </ng-template>
    </ng-doc-root>
  `,
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
  ],
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent {
  protected readonly faBrandIcon = faBrandIcon;
}

