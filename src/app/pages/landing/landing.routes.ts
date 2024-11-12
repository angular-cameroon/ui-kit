import { Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
	{
		path: '',
		title: 'CamerUI',
		component: LandingComponent,
		children: [
			{ path: '', component: ContentComponent }
		]
	},
];

export default routes;