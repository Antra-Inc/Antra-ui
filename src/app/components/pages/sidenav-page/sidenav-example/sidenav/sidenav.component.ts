import { Component } from '@angular/core';
import { NavLinkNode, NavLinkNodeFlat } from 'antra-ui';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav-example',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  optionInSideNav = '';
  isOpen = true;
  sideNavConfig: NavLinkNode[] = [
    // testing with empty children array
    {
      name: 'Renew',
      icon: 'autorenew',
      children: []
    },
    {
      name: 'example-sidenav tree1',
      icon: 'myinfo',
      useSvgIcon: true,
      children: [
        { name: 'example-option1', url: 'components/example-option1' },
        { name: 'example-option2', url: 'components/example-option2' },
      ],
    },
    {
      name: 'example-sidenav tree2',
      icon: 'menu',
      children: [
        { name: 'example-option3', url: 'components/example-option3' },
      ],
    },
    // testing with removing children property
    {
      name: 'Clock',
      icon: 'alarm',
    },
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    const imgDir = 'assets/svg';
    iconRegistry.addSvgIcon(
      'myinfo',
      sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}/icn_myinfo.svg`)
    );
  }

  getClickEventFromSideNav(event: NavLinkNodeFlat): void {
    this.optionInSideNav = event.name;
    // this.router.navigate([event.url]);
  }

  toggleSideNav(): void {
    this.isOpen = !this.isOpen;
  }
}
