import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavLinkNode, NavLinkNodeFlat } from 'antra-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isOpen = true;
  sideNavConfig: NavLinkNode[] = [
    {
      name: 'Buttons',
      icon: 'outbond',
      children: [
        { name: 'ButtonComponent', url: 'components/button' },
        { name: 'RaisedButtonComponent', url: 'components/raised-button' },
      ],
    },
    {
      name: 'SideNav',
      icon: 'settings',
      useSvgIcon: true,
      children: [{ name: 'SidenavbarComponent', url: 'components/sidenav' }],
    },
    {
      name: 'Widgets',
      icon: 'featured_play_list',
      children: [{ name: 'WidgetComponent', url: 'components/widget' }],
    },
    {
      name: 'Login',
      icon: 'lock_open',
      children: [{ name: 'LoginComponent', url: 'components/login' }],
    },

    {
      name: 'Password Reset',
      icon: 'lock_open',
      children: [{ name: 'PasswordResetComponent', url: 'components/password-reset' }],
    },
    {
      name: 'Change Password',
      icon: 'lock_open',
      children: [{ name: 'ChangePasswordComponent', url: 'components/change-password' }],
    },
    {
      name: 'Logo',
      icon: 'fingerprint',
      children: [{ name: 'LogoComponent', url: 'components/logo' }],
    },
    {
      name: 'Progress Spinner',
      icon: 'donut_large',
      children: [{ name: 'ProgressSpinnerComponent', url: 'components/progress-spinner' }],
    },
  ];

  constructor(private router: Router) {}

  getClickEventFromSideNav(event: NavLinkNodeFlat): void {
    if (event.url) {
      this.router.navigate([event.url]);
    }
  }

  toggleSideNav(): void {
    this.isOpen = !this.isOpen;
  }
}
