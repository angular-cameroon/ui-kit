import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { featherIcons } from './feather.icon';

@NgModule({
  imports: [FeatherModule.pick(featherIcons)],
  exports: [FeatherModule],
})
export class IconsModule {}
