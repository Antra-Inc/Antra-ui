import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Mat modules

// Antra modules
import { AntraButtonModule } from './antra-button/antra-button.module';
import { AntraIconModule } from './antra-icon/antra-icon.module';
import { AntraListModule } from './antra-list/antra-list.module';
import { AntraSidenavModule } from './antra-sidenav/antra-sidenav.module';
import { AntraTabsModule } from './antra-tabs/antra-tabs.module';
import { AntraToolbarModule } from './antra-toolbar/antra-toolbar.module';
import { AntraTreeModule } from './antra-tree/antra-tree.module';

// components
import { LoginComponent } from './components/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { RaisedButtonComponent } from './components/raised-button/raised-button.component';
import { LogoComponent } from './components/logo/logo.component';

// directives
import { AntraWidgetDirective } from './directives/antra-widget/antra-widget.directive';
import { PasswordPatternDirective } from './directives/password-pattern.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    RaisedButtonComponent,
    LogoComponent,
    LoginComponent,
    AntraWidgetDirective,
    PasswordPatternDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AntraIconModule,
    AntraSidenavModule,
    AntraToolbarModule,
    AntraButtonModule,
    AntraButtonModule,
    AntraTabsModule,
    AntraTreeModule,
    AntraListModule,
    FormsModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    AntraIconModule,
    AntraSidenavModule,
    AntraToolbarModule,
    AntraButtonModule,
    AntraButtonModule,
    AntraTabsModule,
    AntraTreeModule,
    AntraListModule,
    AntraWidgetDirective,
    LoginComponent,
    ButtonComponent,
    RaisedButtonComponent,
    ButtonComponent,
    RaisedButtonComponent,
    LogoComponent,
  ],
})
export class AntraUiModule {}
