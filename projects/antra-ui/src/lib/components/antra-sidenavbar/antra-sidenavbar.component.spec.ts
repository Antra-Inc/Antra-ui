/* tslint:disable:no-unused-variable */
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavLinkNode, NavLinkNodeFlat } from 'projects/antra-ui/src/lib/interfaces/sidenavbar.interface';
import { SidenavbarComponent } from './antra-sidenavbar.component';
import { AntraUiModule } from '../../antra-ui.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  template: `
    <antra-sidenavbar
      [sideNavBackgroundColor]="sideNavBackground"
      [sideNavTextColor]="sideNavTextColor"
      [isOpen]="isOpen"
      [sideNavConfig]="sideNavConfig"
      (listOptionClicked)="getClickEventFromSideNav($event)"
    >
      <h3>Hello World</h3>
      <button id="toggle" (click)="toggleSideNavBar()">Toggle SideNavBar</button>
    </antra-sidenavbar>
  `,
})
class TestHostComponent {
  sideNavBackground = 'blue';
  sideNavTextColor = 'black';
  optionInSideNav = '';
  isOpen = true;

  sideNavConfig: NavLinkNode[] = [
    {
      name: 'example-sidenav tree1',
      icon: 'person',
      children: [
        { name: 'example-option1', url: 'components/example-option1' },
        { name: 'example-option2', url: 'components/example-option2' },
      ],
    },
    {
      name: 'example-sidenav tree2',
      icon: 'menu',
      children: [{ name: 'example-option3', url: 'components/example-option3' }],
    },
  ];

  getClickEventFromSideNav(event: NavLinkNodeFlat): void {
    this.optionInSideNav = event.name;
  }

  toggleSideNavBar(): void {
    this.isOpen = !this.isOpen;
  }
}

describe('SidenavbarComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SidenavbarComponent, TestHostComponent],
        imports: [NoopAnimationsModule, AntraUiModule],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoule display any templete inside the the sidenavbar tag correctly', () => {
    const matDrawerContent = fixture.debugElement.query(By.css('h3'));
    expect(matDrawerContent.nativeElement.textContent).toContain('Hello World');
  });

  it('should render the correct Text Color for the sideNav after customize the sideNavTextColor attribute.', () => {
    const sidnav = fixture.debugElement.query(By.directive(SidenavbarComponent));
    sidnav.componentInstance.sideNavTextColor = 'black';
    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('mat-list-item'));

    for (const item of listItems) {
      expect(item.nativeElement.style.color).toBe('black');
    }
  });

  it('should render the correct background for the sideNav after customize the sideNavBackgroundColor attribute.', () => {
    const sidnav = fixture.debugElement.query(By.directive(SidenavbarComponent));
    sidnav.componentInstance.sideNavBackground = 'blue';
    fixture.detectChanges();

    const matDrawer = fixture.debugElement.query(By.css('mat-drawer'));
    expect(matDrawer.nativeElement.style.background).toBe('blue');

    const matTree = fixture.debugElement.query(By.css('mat-tree'));
    expect(matTree.nativeElement.style.background).toBe('blue');
  });

  it(
    'should get tree node config data after customize the sideNavConfig attribute ',
    waitForAsync(() => {
      const sidenav = fixture.debugElement.query(By.directive(SidenavbarComponent));
      fixture.detectChanges();

      const data = fixture.componentInstance.sideNavConfig;

      expect(sidenav.componentInstance.sideNavConfig.length).toBe(2);
      expect(sidenav.componentInstance.sideNavConfig).toEqual(data);
    })
  );

  it(
    'should toggle the sidenavbar after click Toggle SideNavBar button',
    waitForAsync(() => {
      const sidenav = fixture.debugElement.query(By.directive(SidenavbarComponent));
      fixture.detectChanges();

      expect(sidenav.componentInstance.isOpen).toBe(true);

      const button = fixture.debugElement.query(By.css('#toggle'));
      button.triggerEventHandler('click', null);
      // component.toggleSideNavBar();
      fixture.detectChanges();
      expect(sidenav.componentInstance.isOpen).toBe(false);
    })
  );

  it(
    'should emit node after click tree node in the sidenavbar',
    waitForAsync(() => {
      const sidenav = fixture.debugElement.query(By.directive(SidenavbarComponent));
      const spyMethodEmit = spyOn(sidenav.componentInstance.listOptionClicked, 'emit').and.callThrough();
      const spyMethodGetEmit = spyOn(fixture.componentInstance, 'getClickEventFromSideNav').and.callThrough();

      fixture.detectChanges();
      const data: NavLinkNodeFlat = {
        expandable: true,
        name: 'example-sidenav tree1',
        url: undefined,
        useSvgIcon: undefined,
        icon: 'person',
        level: 0,
      };

      const matListItems = fixture.debugElement.queryAll(By.css('mat-list-item'));
      matListItems[0].triggerEventHandler('click', null);

      expect(spyMethodEmit).toHaveBeenCalledWith(data);
      expect(spyMethodGetEmit).toHaveBeenCalledWith(data);
    })
  );
});
