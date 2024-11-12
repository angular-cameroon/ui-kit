import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'docs',
    loadChildren: () => import('./pages/docs/docs.routes'),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/landing/landing.routes'),
    data: { hideSidebar: true}
  },
  {
    path: '**',
    redirectTo: 'docs/getting-started/installation',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
