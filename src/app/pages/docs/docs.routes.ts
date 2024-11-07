import { Routes } from '@angular/router';
import { DocsComponent } from './docs.component';
import { NG_DOC_ROUTING } from '@ng-doc/generated';

const routes: Routes = [
  { path: '', redirectTo: 'getting-started/introduction', pathMatch: 'full' },
  { path: '', component: DocsComponent, children: NG_DOC_ROUTING },
];

export default routes;
