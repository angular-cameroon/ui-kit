import { provideHttpClient, withInterceptorsFromDi, withFetch } from "@angular/common/http";
import { NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent, provideNgDocApp, provideSearchEngine, NgDocDefaultSearchEngine, providePageSkeleton, NG_DOC_DEFAULT_PAGE_SKELETON, provideMainPageProcessor, NG_DOC_DEFAULT_PAGE_PROCESSORS } from "@ng-doc/app";
import { NG_DOC_ROUTING, provideNgDocContext } from "@ng-doc/generated";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(NG_DOC_ROUTING, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', scrollOffset: [0, 70]}),
      NgDocRootComponent,
      NgDocNavbarComponent,
      NgDocSidebarComponent
],
  providers: [
    provideClientHydration(),
      provideHttpClient(withInterceptorsFromDi(), withFetch()),
      provideNgDocContext(),
      provideNgDocApp(),
      provideSearchEngine(NgDocDefaultSearchEngine),
      providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
      provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS)
],
  bootstrap: [AppComponent]
})
export class AppModule { }
