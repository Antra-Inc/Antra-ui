import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { NavLinkNode, NavLinkNodeFlat } from '../../interfaces/sidenavbar.interface';

/**
 * `antra-sidenavbar` is a mat-drawer-container with a vertical navigation component which apart from traditional,
 * text links, might embed icons.
 *
 * By virtue of its clarity and simplicity, it remarkably increases the User Experience.
 * It allows you to navigate through small applications as well as vast portals swiftly.
 * Its multiple link embedding functionalities enables you to implement more advanced content categorization,
 * which is almost essential within bigger projects.
 *
 * Thanks to Antra-UI you can easily implement SideNav in your own projects, by using one of various, alluring Side Menus.
 *
 * ### Usage
 *  `import { AntraUiModule } from 'antra-ui';`
 *
 *  `import { NavLinkNode, NavLinkNodeFlat } from 'antra-ui';`
 */
@Component({
  selector: 'antra-sidenavbar',
  templateUrl: './antra-sidenavbar.component.html',
  styleUrls: ['./antra-sidenavbar.component.scss'],
})
/**
 * Example of usage:
 * <example-url>https://antra-inc.github.io/Antra-ui/components/sidenav</example-url>
 */
export class SidenavbarComponent implements OnInit, OnChanges {
  /**
   * Value of control Sidenav stretch, when isExpanded = true, the Sidenav should be expended;
   */
  isExpanded = false;

  /**
   * Customrize the Sidenav text color;
   */
  @Input() sideNavTextColor = 'red';
  /**
   * Customrize the Sidenav background;
   */
  @Input() sideNavBackground = '';
  /**
   * Set mode of the Sidenav, the default mode is side;
   */
  @Input() sidenavMode: 'over' | 'push' | 'side' = 'side';
  /**
   * Set the tree node left padding;
   */
  @Input() treeNodePaddingIndent = '0px';
  /**
   * Set the Sidenav open or close;
   */
  @Input() isOpen = true;

  /**
   * Customrize tree nodes, enables to implement more advanced content categorization;
   */
  @Input() sideNavConfig: NavLinkNode[] = [];

  /**
   * Event emiter, use to hold node info;
   */
  @Output() listOptionClicked = new EventEmitter();

  /**
   * @ignore
   */
  // tslint:disable-next-line: variable-name
  private _transformer = (node: NavLinkNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      url: node.url,
      icon: node.icon,
      useSvgIcon: node.useSvgIcon,
      level,
    };
  };

  /**
   * @ignore
   */
  // tslint:disable-next-line: member-ordering
  treeControl = new FlatTreeControl<NavLinkNodeFlat>(
    (node) => node.level,
    (node) => node.expandable
  );
  /**
   * @ignore
   */
  // tslint:disable-next-line: member-ordering
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );
  /**
   * @ignore
   */
  // tslint:disable-next-line: member-ordering
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  /**
   * @ignore
   */
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = this.sideNavConfig;
  }
  /**
   * @ignore
   */
  ngOnInit(): void {
    this.dataSource.data = this.sideNavConfig;
  }

  /**
   * @ignore
   */
  hasChild = (_: number, node: NavLinkNodeFlat) => node.expandable;

  /**
   * Emit event during click the tree node
   * @param NavLinkNodeFlat node `node` contains customriz info for each tree node
   */
  // tslint:disable-next-line: typedef
  handleListOnClick(node: NavLinkNodeFlat) {
    this.listOptionClicked.emit(node);
  }
  /**
   * Handle mouse leave
   */
  handleMouseLeave(): void {
    this.isExpanded = false;
  }
  /**
   * Handle mouse enter
   */
  handleMouseEnter(): void {
    this.isExpanded = true;
  }
  /**
   * Toggle the tree node which has child tree nodes
   * @param NavLinkNodeFlat node
   */
  handleTreeNodeToggle(node: NavLinkNodeFlat): void {
    this.treeControl.toggle(node);
  }
}
