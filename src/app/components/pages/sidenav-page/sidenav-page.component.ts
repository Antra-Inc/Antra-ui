import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavLinkNodeFlat, NavLinkNode } from 'src/app/interface/app.interface';

@Component({
  selector: 'app-sidenav-page',
  templateUrl: './sidenav-page.component.html',
  styleUrls: ['./sidenav-page.component.scss']
})
export class SidenavPageComponent {
  htmlSource = `<antra-sidenavbar class="drawer-container" sideNavBackgroundColor="rgb(22, 49, 96)" 
  sideNavTextColor="white" sideNavSubMenuTextColor="white" [isOpen]="isOpen" [sideNavConfig]="sideNavConfig"
  sideNavBackgroundHighlightColor="grey" (listOptionClicked)="getClickEventFromSideNav($event)">
  <button type="button" mat-raised-button (click)="toggleSideNav()">Toggle sidenav</button>
  <h1 *ngIf="optionInSideNav !== ''">{{ optionInSideNav }} be clicked.</h1>
  <h1 *ngIf="optionInSideNav === ''">Select an optione.</h1>
</antra-sidenavbar>
  `;

  scssSource = ` // customize container
  .drawer-container::ng-deep > .mat-drawer-container {
    width: 500px;
    height: 300px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 0;
  }  
  `;

  tsSource = ` import { Component } from '@angular/core';
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
      // for testing 0 child
      {
        name: 'Clock',
        icon: 'alarm',
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
    ];
  
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      const imgDir = 'assets/svg';
      iconRegistry.addSvgIcon(
        'myinfo',
        sanitizer.bypassSecurityTrustResourceUrl(imgDir+'/icn_myinfo.svg')
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
  `;
}
