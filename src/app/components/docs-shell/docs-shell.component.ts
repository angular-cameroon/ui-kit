import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { NG_DOC_ROUTING } from '@ng-doc/generated';
import {
  NgDocNavbarComponent,
  NgDocRootComponent,
  NgDocSidebarComponent,
} from '@ng-doc/app';
import {
  NgDocButtonIconComponent,
  NgDocIconComponent,
  NgDocTooltipDirective,
} from '@ng-doc/ui-kit';

@Component({
  selector: 'cam-docs-shell',
  template: `
    <ng-doc-root>
      <ng-doc-navbar>
        <h3 style="margin: 0" ngDocNavbarLeft>MyAwesomeDoc</h3>
      </ng-doc-navbar>
      <ng-doc-sidebar></ng-doc-sidebar>
      <router-outlet></router-outlet>
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
    NgDocIconComponent,
    NgDocTooltipDirective,
    NgDocButtonIconComponent,
  ],
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsShellComponent {}

const routes: Routes = [
  {
    path: '',
    component: DocsShellComponent,
    children: NG_DOC_ROUTING,
  },
];

export default routes;
