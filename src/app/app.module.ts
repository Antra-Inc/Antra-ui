import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AntraUiModule } from 'antra-ui';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { ButtonPageComponent } from './components/pages/button-page/button-page.component';
import { RaisedButtonPageComponent } from './components/pages/raised-button-page/raised-button-page.component';
import { ButtonExampleComponent } from './components/pages/button-page/button-example/button-example.component';
import { RaisedButtonExampleComponent } from './components/pages/raised-button-page/raised-button-example/raised-button-example.component';
import { ExampleDocComponent } from './components/example-doc/example-doc.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LoginExampleComponent } from './components/pages/login-page/login-example/login-example.component';
import { ProgressSpinnerPageComponent } from './components/pages/progress-spinner-page/progress-spinner-page.component';
import { ProgressSpinnerExampleComponent } from './components/pages/progress-spinner-page/progress-spinner-example/progress-spinner-example.component';
import { SidenavPageComponent } from './components/pages/sidenav-page/sidenav-page.component';
import { SidenavComponent } from './components/pages/sidenav-page/sidenav-example/sidenav/sidenav.component';
import { WidgetExampleComponent } from './components/pages/widget-page/widget-example/widget-example.component';
import { WidgetPageComponent } from './components/pages/widget-page/widget-page.component';
import { LogoPageComponent } from './components/pages/logo-page/logo-page.component';
import { LogoExampleComponent } from './components/pages/logo-page/logo-example/logo-example.component';

import { loadSvgResources } from './utils/svg.util';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExampleDocComponent,
    ButtonPageComponent,
    RaisedButtonPageComponent,
    ButtonExampleComponent,
    RaisedButtonExampleComponent,
    LoginPageComponent,
    LoginExampleComponent,
    ProgressSpinnerPageComponent,
    ProgressSpinnerExampleComponent,
    SidenavPageComponent,
    SidenavComponent,
    WidgetPageComponent,
    WidgetExampleComponent,
    LogoPageComponent,
    LogoExampleComponent,
  ],
  imports: [
    AntraUiModule,
    AppRoutingModule,
    HighlightModule,
    HttpClientModule],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    loadSvgResources(iconRegistry, sanitizer);
  }

}
