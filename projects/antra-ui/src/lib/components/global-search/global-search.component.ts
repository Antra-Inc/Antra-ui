import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
/**
 * `antra-global-search` component provides a default style different `.scss` classes.
 *
 * ### Usage
 *  `import { AntraUiModule } from 'antra-ui';`
 */
@Component({
  selector: 'antra-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
})
/**
 * Example of usage:
 * <example-url>http://127.0.0.1:4200/components/global-search</example-url>
 */
export class GlobalSearchComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholderText = 'Search...';
  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  handleKeyUp(text: string) {
    this.notify.emit(text);
  }
}
